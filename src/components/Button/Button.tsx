interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary";
}

export function Button({
  size = "md",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button className="bg-default-500" {...props}>
      Button ({variant} - {size})
    </button>
  );
}
