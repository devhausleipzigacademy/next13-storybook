"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Button = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Button {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
}

function Button({ variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "py-6 px-2 custom-class",
        variant === "primary" ? "bg-blue-500" : "bg-green-500",
        size === "small" ? "text-sm" : size === "medium" ? "text-md" : "text-lg"
      )}
      {...props}
    ></button>
  );
}

export default Button;
