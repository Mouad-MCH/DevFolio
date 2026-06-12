'use client'

import { useState } from "react";
import Button from "../ui/Button";
import { Check, Send } from "lucide-react";


interface FormValues {
    name: string;
    email: string;
    message: string;
}

interface FormError {
    name?: boolean;
    email?: boolean;
    message?: boolean;
}

const EMPTY: FormValues = { name: "", email: "", message: ""};


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
    const [values, setValues] = useState<FormValues>(EMPTY);
    const [errors, setErrors] = useState<FormError>({})
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const validate = (state: FormValues): FormError => {
        return {
            name: state.name.trim().length === 0,
            email: EMAIL_RE.test(state.email.trim()),
            message: state.message.trim().length < 10
        }
    }

    const update = (type: keyof FormValues, value: string) => {
        const next = { ...values, [type]: value };
        setValues(next);

        if(errors[type]) {
            setErrors(prev => ({ ...prev, [type]: validate(next)[type] }))
        }
    } 

    const handleSubmit = () => {
        const nextErrors = validate(values);
        setErrors(nextErrors);
        if(Object.values(nextErrors).some(Boolean)) return;

        setSubmitting(true);
        window.setTimeout(() => {
            setSubmitting(false);
            setSent(true);
        }, 650);
    }

    const reset = () => {
        setValues(EMPTY);
        setErrors({});
        setSent(false);
    }

    if(sent) {
        return (
            <div className="card form-card">
              <div className="form-success show">
                <span className="form-success__icon">
                  <Check />
                </span>
                <h3 style={{ fontSize: 22 }}>Message sent</h3>
                <p style={{ color: "var(--text-2)", maxWidth: "36ch" }}>
                  Thanks for reaching out — I&apos;ve got it and I&apos;ll get back to
                  you shortly.
                </p>
                <Button variant="secondary" size="sm" onClick={reset}>
                  Send another
                </Button>
              </div>
            </div>
        )
    }

  return (
    <div className="card form-card">
       <div className={`field${errors.name ? " has-error" : ""}`}>
          <label htmlFor="in-name">
            Name <span className="req">*</span>
          </label>
          <input 
            className="input"
            type="text" 
            id="in-name"
            name="name"
            placeholder="Ada Lovelace"
            autoComplete="name"
            value={values.name}
            onChange={e => update("name", e.target.value)}
          />
       </div>
       <div className={`field${errors.email ? " has-error" : ""}`}>
          <label htmlFor="in-email">
            Email <span className="req">*</span>
          </label>
          <input 
            className="input"
            type="email" 
            id="in-eamil"
            name="eamil"
            placeholder="Ada@gmail.com"
            autoComplete="email"
            value={values.email}
            onChange={e => update("email", e.target.value)}
          />
       </div>
       <div className={`field${errors.message ? " has-error" : ""}`}>
          <label htmlFor="in-message">
            Message <span className="req">*</span>
          </label>
          <textarea 
            className="textaria"
            id="in-message"
            name="message"
            placeholder="Tell me a little about what you're  building..."
            value={values.message}
            onChange={e => update("message", e.target.value)}
          />
       </div>

       <div className="form-actions">
        <Button type="button"  disabled={submitting} onClick={handleSubmit}>
            <Send />
            { submitting ? "Sending..." : "Send message" }
        </Button>
       </div>
    </div>
  )
}

export default ContactForm
