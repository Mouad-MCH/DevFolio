import ContactForm from "@/src/components/contact/ContactForm";
import { SocialLinks } from "@/src/components/contact/SocialLinks";

const page = () => {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 34 }}>
          <div>
            <span className="over-line">
              <span className="idx">·</span> Say hello
            </span>
            <h2>Let&apos;s work together</h2>
          </div>
        </div>

        <p className="lead contact-intro ">
          Have a project in mind, a role to fill, or just want to talk shop?
          Drop a note below — I reply to everything within a day or two.
        </p>

        <div className="contact-grid" style={{ marginTop: 28 }}>
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default page;
