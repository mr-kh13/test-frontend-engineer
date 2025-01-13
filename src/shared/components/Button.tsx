import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size?: "md";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  fullWidth,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        "rounded-lg capitalize disabled:bg-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed disabled:opacity-80 disabled:text-gray-500",
        {
          "bg-blue-500 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white":
            variant === "primary",
          "bg-white text-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white":
            variant === "secondary",
          "w-full": fullWidth,
          "p-3 text-base font-semibold": size === "md",
        }
      )}
    >
      {children}
    </button>
  );
}
