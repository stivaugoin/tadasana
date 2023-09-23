import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useTypography } from "../../../hooks/useTypography";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label */
  children: React.ReactNode;

  /** Controls the button's appearance */
  variant?: "default" | "primary" | "danger";
}

export function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  const typography = useTypography({ bold: true, size: "sm" });

  return (
    <button
      className={twMerge(
        clsx(
          typography,
          "shadow-sm px-2.5 py-1.5 rounded-md",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          "active:scale-[0.97] transition duration-150 ease-in-out",
          {
            // Variants
            "text-default-900 ring-1 ring-inset ring-default-300 hover:bg-default-50 focus-visible:outline-default-300":
              variant === "default",
            "text-white bg-primary-700 hover:bg-primary-800 focus-visible:outline-primary-700":
              variant === "primary",
            "text-white bg-danger-600 hover:bg-danger-700 focus-visible:outline-danger-600":
              variant === "danger",
          },
        ),
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
