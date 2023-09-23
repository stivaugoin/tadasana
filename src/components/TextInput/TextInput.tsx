import clsx from "clsx";
import { ComponentPropsWithoutRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import { useTypography } from "../../hooks/useTypography";

type HTMLInputProps = Omit<ComponentPropsWithoutRef<"input">, "onChange">;

interface TextInputProps extends HTMLInputProps {
  error?: string;
  hideLabel?: boolean;
  label: string;
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const TextInput = ({
  error,
  hideLabel,
  label,
  onChange,
  value,
  ...inputProps
}: TextInputProps) => {
  const uniqueId = useId();

  const errorTypography = useTypography({ size: "sm", variant: "danger" });
  const inputTypography = useTypography({ size: "sm" });
  const labelTypography = useTypography({ size: "sm" });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.currentTarget.value, event);
  };

  return (
    <div className="w-full">
      <label
        className={twMerge(
          clsx(labelTypography, "block leading-6 mb-2", {
            "sr-only": hideLabel,
          }),
        )}
        htmlFor={uniqueId}
      >
        {label}
      </label>

      <input
        className={twMerge(
          clsx(
            inputTypography,
            "block w-full rounded-md border-0 py-1.5 shadow-sm placeholder:text-default-400 leading-6",
            "ring-1 ring-inset focus:ring-2 focus:ring-inset",
            {
              "ring-default-300 focus:ring-primary-600": !error,
              "ring-danger-500 focus:ring-danger-600": error,
            },
          ),
        )}
        id={uniqueId}
        onChange={handleChange}
        type="text"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${uniqueId}-error` : undefined}
        value={value}
        {...inputProps}
      />

      {error && (
        <p
          className={twMerge(errorTypography, "mt-2")}
          id={`${uniqueId}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
};
