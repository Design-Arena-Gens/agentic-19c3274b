import { InputHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "input w-full px-4 py-3 bg-white text-[16px] placeholder:text-[var(--color-text-secondary)] border outline-none",
          "border-[color:var(--color-secondary)]/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20",
          hasError && "border-[var(--color-error)] focus:ring-[var(--color-error)]/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
