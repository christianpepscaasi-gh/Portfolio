import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "accent",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary-dark text-accent-light hover:bg-secondary-warm border border-secondary-warm",
    secondary:
      "bg-secondary-warm text-accent-light hover:bg-accent-gold hover:text-primary-dark border border-accent-gold",
    accent:
      "bg-accent-gold text-primary-dark hover:bg-accent-light border border-accent-light",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <button
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
