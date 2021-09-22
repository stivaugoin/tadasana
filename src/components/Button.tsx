import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: "large" | "medium" | "small";
  startIcon?: React.ComponentType<React.ComponentProps<"svg">>;
  type?: "button" | "reset" | "submit";
  variant?: "danger" | "normal" | "primary" | "success" | "warning";
}

export function Button({
  children,
  className,
  size = "medium",
  startIcon: StartIcon,
  type = "button",
  variant = "normal",
  ...rest
}: ButtonProps): JSX.Element {
  const isIcon = (() => {
    if (StartIcon) {
      return false;
    }

    if (React.Children.count(children) > 1) {
      return false;
    }

    const [child] = React.Children.toArray(children);
    if (typeof child !== "string") {
      return true;
    }

    return false;
  })();

  const renderChildren = (): React.ReactNode => {
    if (StartIcon) {
      return (
        <>
          <StartIcon
            className={classNames([
              size === "small" && "w-3.5 h-3.5",
              size === "medium" && "w-4 h-4",
              size === "large" && "w-5 h-5",
            ])}
          />
          {children}
        </>
      );
    }

    if (React.Children.count(children) > 1) {
      return children;
    }

    const [child] = React.Children.toArray(children);
    if (typeof child === "string") {
      return children;
    }

    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: classNames([
          size === "small" && "h-4 w-4",
          size === "medium" && "h-5 w-5",
          size === "medium" && "h-6 w-6",
        ]),
      });
    }

    return child;
  };

  return (
    <button
      className={classNames(
        className,
        "inline-flex justify-center items-center rounded-full shadow-sm font-medium border border-transparent flex-shrink-0",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // Size
        [size === "small" && !isIcon && "px-3 py-2 text-xs"],
        [size === "small" && isIcon && "p-1.5"],
        [size === "medium" && !isIcon && "px-4 py-2 text-sm"],
        [size === "medium" && isIcon && "p-2"],
        [size === "large" && !isIcon && "px-4 py-2 text-base"],
        [size === "large" && isIcon && "p-2"],

        // Variant
        [
          variant === "danger" &&
            "text-white bg-danger-600 hover:bg-danger-700 focus:ring-danger-500",
        ],
        [
          variant === "normal" &&
            "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
        ],
        [
          variant === "primary" &&
            "text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
        ],
        [
          variant === "success" &&
            "text-white bg-success-600 hover:bg-success-700 focus:ring-success-500",
        ],
        [
          variant === "warning" &&
            "text-white bg-warning-600 hover:bg-warning-700 focus:ring-warning-500",
        ],

        // StartIcon
        [Boolean(StartIcon) && "gap-1.5 flex"],
        [Boolean(StartIcon) && size === "small" && "pr-3.5"]
      )}
      {...rest}
    >
      {renderChildren()}
    </button>
  );
}
