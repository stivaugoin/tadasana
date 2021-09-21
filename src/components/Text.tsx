import classNames from "classnames";
import React, { HTMLAttributes, ReactNode } from "react";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  bold?: boolean;
  children: ReactNode;
  italic?: boolean;
  size?: "large" | "medium" | "small";
  variant?: "danger" | "muted" | "normal" | "primary" | "success" | "warning";
}

export function Text({
  bold = false,
  children,
  className,
  italic = false,
  size = "medium",
  variant = "normal",
  ...props
}: TextProps): JSX.Element {
  return (
    <span
      className={classNames(
        // Bold
        [bold ? "font-medium" : "font-light"],

        // Italic
        [italic && "italic"],

        // Size
        [size === "large" && "text-lg"],
        [size === "medium" && "text-base"],
        [size === "small" && "text-sm"],

        // Variant
        [variant === "danger" && "text-danger-500"],
        [variant === "muted" && "text-gray-500"],
        [variant === "normal" && "text-gray-900"],
        [variant === "primary" && "text-primary-500"],
        [variant === "success" && "text-success-500"],
        [variant === "warning" && "text-warning-500"],

        // Other classes from props
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
