interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary";
}

export function Button({
  size = "md",
  variant = "default",
  ...props
}: ButtonProps) {
  return <button {...props}>Button</button>;
}
