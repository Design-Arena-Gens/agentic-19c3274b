import { HTMLAttributes } from "react";
import { clsx } from "clsx";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  color?: "default" | "success" | "warning" | "error";
};

export const Chip = ({ className, color = "default", ...props }: ChipProps) => {
  const colorStyles: Record<NonNullable<ChipProps["color"]>, string> = {
    default:
      "bg-[var(--color-secondary)]/20 text-[var(--color-accent)] border border-[var(--color-secondary)]/40",
    success: "bg-[var(--color-success)]/15 text-[var(--color-success)]",
    warning: "bg-[var(--color-warning)]/15 text-[var(--color-warning)]",
    error: "bg-[var(--color-error)]/15 text-[var(--color-error)]",
  };

  return (
    <span
      className={clsx(
        "chip inline-flex items-center gap-2 px-3 py-1 text-[12px] font-medium",
        colorStyles[color],
        className
      )}
      {...props}
    />
  );
};
