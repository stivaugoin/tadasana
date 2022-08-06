import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { styles } from "./styles";
import { Size, Variant } from "./types";

interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: Size;
  type?: "button" | "reset" | "submit";
  variant?: Variant;
}

export function Button({
  children,
  size = "md",
  type = "button",
  variant = "normal",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.inputBase(size, variant),
        "block flex-shrink-0 justify-center border border-transparent",

        // Variant
        [
          variant === "danger" &&
            "bg-danger-600 text-white hover:bg-danger-700 disabled:hover:bg-danger-600",
        ],
        [
          variant === "normal" &&
            "bg-primary-100 text-primary-700 hover:bg-primary-200 disabled:hover:bg-primary-100",
        ],
        [
          variant === "primary" &&
            "bg-primary-600 text-white hover:bg-primary-700 disabled:hover:bg-primary-600",
        ],
        [
          variant === "success" &&
            "bg-success-600 text-white hover:bg-success-700 disabled:hover:bg-success-600",
        ],
        [
          variant === "warning" &&
            "bg-warning-600 text-white hover:bg-warning-700 disabled:hover:bg-warning-600",
        ]
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
