import classNames from "classnames";
import { TextareaHTMLAttributes } from "markdown-to-jsx/node_modules/@types/react";
import React from "react";

export interface TextAreaProps
  extends React.DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  hasError?: boolean;
  rows?: number;
  size?: "medium" | "small";
}

export function TextArea({
  className,
  hasError = false,
  rows = 2,
  size = "medium",
  ...props
}: TextAreaProps): JSX.Element {
  return (
    <textarea
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
      rows={rows}
      {...props}
    />
  );
}
