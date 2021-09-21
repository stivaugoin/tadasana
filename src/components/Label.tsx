import React, { HTMLAttributes, ReactNode } from "react";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
}

export function Label({
  children,
  htmlFor,
  ...props
}: LabelProps): JSX.Element {
  return (
    <label
      className="block mb-1 text-sm font-medium text-gray-700"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
}
