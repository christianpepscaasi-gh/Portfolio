import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export function Badge({
  children,
  variant = "secondary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary: "bg-primary-dark text-accent-light border border-secondary-warm",
    secondary: "bg-secondary-warm text-accent-light border border-accent-gold",
    accent: "bg-accent-gold text-primary-dark border border-accent-gold",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap min-w-[80px] px-4 py-1.5 text-sm leading-tight rounded-full font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
