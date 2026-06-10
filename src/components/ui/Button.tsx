import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "md" | "sm";
}

const Button = ({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) => {
  const classes = ["btn", `btn--${variant}`, size === "sm" ? "btn--sm" : null, className].filter(Boolean).join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
