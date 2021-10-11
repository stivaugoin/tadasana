import classNames from "classnames";
import React, { HTMLAttributes, ReactNode } from "react";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  bold?: boolean;
  children: ReactNode;
  italic?: boolean;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  variant?: "danger" | "muted" | "normal" | "primary" | "success" | "warning";
}

export function Text({
  bold = false,
  children,
  className,
  italic = false,
  size = "base",
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
        [size === "xs" && "text-xs"],
        [size === "sm" && "text-sm"],
        [size === "base" && "text-base"],
        [size === "lg" && "text-lg"],
        [size === "xl" && "text-xl"],
        [size === "2xl" && "text-2xl"],
        [size === "3xl" && "text-3xl"],
        [size === "4xl" && "text-4xl"],

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
