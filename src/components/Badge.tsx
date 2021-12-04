import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  size?: "large" | "small";
  startIcon?: React.ComponentType<React.ComponentProps<"svg">> | any;
  variant?: "danger" | "normal" | "primary" | "success" | "warning";
}

export function Badge({
  children,
  size = "small",
  startIcon: StartIcon,
  variant = "normal",
}: BadgeProps): JSX.Element {
  return (
    <span
      className={classNames(
        "inline-flex rounded-full items-center font-medium flex-shrink-0 w-max",

        // Size
        [size === "large" && "px-3 py-0.5 text-sm"],
        [size === "small" && "py-0.5 px-2.5 text-xs"],

        // Variant
        [variant === "danger" && "bg-danger-100 text-danger-800"],
        [variant === "normal" && "bg-gray-100 text-gray-800"],
        [variant === "primary" && "bg-primary-100 text-primary-800"],
        [variant === "success" && "bg-success-100 text-success-800"],
        [variant === "warning" && "bg-warning-100 text-warning-800"]
      )}
    >
      {StartIcon && (
        <StartIcon
          className={classNames(
            "-ml-0.5 mr-1.5",

            // Size
            [size === "large" && "h-3.5 w-3.5"],
            [size === "small" && "h-3 w-3"],

            // Variant
            [variant === "danger" && "text-danger-800"],
            [variant === "normal" && "text-gray-800"],
            [variant === "primary" && "text-primary-800"],
            [variant === "success" && "text-success-800"],
            [variant === "warning" && "text-warning-800"]
          )}
        />
      )}

      {children}
    </span>
  );
}
