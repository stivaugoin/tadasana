import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  size?: "medium" | "small";
  type: HTMLInputElement["type"];
}

export function Input({
  className,
  hasError = false,
  size = "medium",
  type = "text",
  ...props
}: InputProps): JSX.Element {
  return (
    <input
      className={classNames(
        "block w-full rounded-md shadow-sm",

        // Color
        [
          hasError
            ? "border-danger-300 focus:ring-danger-500 focus:border-danger-500"
            : "border-gray-300 focus:ring-primary-500 focus:border-primary-500",
        ],

        // Size
        [size === "medium" && "text-sm"],
        [size === "small" && "text-xs"],

        className
      )}
      type={type}
      {...props}
    />
  );
}
