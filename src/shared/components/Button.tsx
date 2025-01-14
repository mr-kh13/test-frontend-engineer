import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size?: "md" | "lg";
  fullWidth?: boolean;
  iconButton?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  fullWidth,
  type = "button",
  iconButton,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        className,
        "rounded-lg capitalize disabled:bg-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed disabled:opacity-80 disabled:text-gray-500",
        {
          "bg-blue-500 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white":
            !iconButton && variant === "primary",
          "text-blue-500 bg-white hover:text-blue-600 hover:bg-white focus:text-blue-600 focus:bg-white":
            variant === "primary" && iconButton,
          "bg-white text-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white":
            !iconButton && variant === "secondary",
          "bg-white text-blue-500 hover:bg-white hover:text-blue-500 focus:text-blue-600 focus:bg-white":
            iconButton && variant === "secondary",
          "w-full": fullWidth,
          "p-3 text-base font-semibold": size === "md",
          "p-3 text-xl font-semibold": size === "lg",
          "rounded-full border-none": iconButton,
        }
      )}
    >
      {children}
    </button>
  );
}
