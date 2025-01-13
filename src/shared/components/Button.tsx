import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary";
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
      className={clsx(className, "rounded-lg capitalize", {
        "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600":
          variant === "primary",
        ["w-full"]: fullWidth,
        "p-3 text-base font-semibold": size === "md",
      })}
    >
      {children}
    </button>
  );
}
