import classNames from "classnames";
import { Size, Variant } from "./types";

export const styles = {
  inputBase: (size: Size, variant: Variant) =>
    classNames(
      "rounded-full shadow-sm items-center",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-opacity-60",

      // Size
      [size === "sm" && "px-2.5 py-1.5 text-xs"],
      [size === "md" && "px-4 py-2 text-sm"],

      // Variant
      [variant === "danger" && "focus-visible:ring-danger-500"],
      [variant === "normal" && "focus-visible:ring-primary-500"],
      [variant === "primary" && "focus-visible:ring-primary-500"],
      [variant === "success" && "focus-visible:ring-success-500"],
      [variant === "warning" && "focus-visible:ring-warning-500"]
    ),
};
