import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  fullWidth?: boolean;
};

const base =
  "btn inline-flex items-center justify-center px-5 py-3 text-[16px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-soft";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[#244c40] focus:ring-[var(--color-primary)]",
  secondary:
    "bg-[var(--color-secondary)] text-[#0f221c] hover:bg-[#7aa898] focus:ring-[var(--color-secondary)]",
  outline:
    "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
  ghost:
    "bg-transparent text-[var(--color-foreground)] hover:bg-black/5",
  danger:
    "bg-[var(--color-error)] text-white hover:bg-[#d7372c] focus:ring-[var(--color-error)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], fullWidth && "w-full", className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
