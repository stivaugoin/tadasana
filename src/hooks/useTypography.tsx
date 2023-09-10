import clsx from "clsx";

interface HeadingTypography {
  size: "h1" | "h2" | "h3";
}

interface TextSizeTypography {
  bold?: boolean;
  italic?: boolean;
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

type Typography = {
  variant?:
    | "primary"
    | "secondary"
    | "default"
    | "success"
    | "warning"
    | "danger";
} & (HeadingTypography | TextSizeTypography);

export function useTypography({
  size = "md",
  variant,
  ...restProps
}: Typography) {
  const isHeading = (size: string) => ["h1", "h2", "h3"].includes(size);

  return clsx({
    // Font
    "font-rubik": !isHeading(size),
    "font-montserrat": isHeading(size),

    // Style
    italic: "italic" in restProps && restProps.italic,

    // Weight
    "font-normal": !("bold" in restProps) || restProps.bold === false,
    "font-semibold": "bold" in restProps && restProps.bold,

    // Size - Text
    "text-xs": size === "xs",
    "text-sm": size === "sm",
    "text-md": size === "md",
    "text-lg": size === "lg",
    "text-xl": size === "xl",

    // Size - Heading
    "text-2xl": size === "h3",
    "text-3xl": size === "h2",
    "text-4xl": size === "h1",

    // Variant
    "text-primary-500": variant === "primary",
    "text-secondary-500": variant === "secondary",
    "text-default-600": variant === "default",
    "text-success-500": variant === "success",
    "text-warning-500": variant === "warning",
    "text-danger-500": variant === "danger",
  });
}
