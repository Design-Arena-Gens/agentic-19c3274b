import { HTMLAttributes } from "react";
import { clsx } from "clsx";

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "card p-5 rounded-[var(--radius-card)] bg-[var(--color-surface)]",
        className
      )}
      {...props}
    />
  );
};
