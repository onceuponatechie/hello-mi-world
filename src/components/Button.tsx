import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "outline";
  size?: "icon";
};

export function Button({ variant, size, className = "", ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        variant === "outline" ? "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground",
        size === "icon" ? "h-9 w-9" : "h-9 px-4 py-2",
        className,
      )}
      {...props}
    />
  );
}
