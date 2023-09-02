interface BadgeProps {
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "default" | "success" | "danger" | "warning";
}

export function Badge({ label }: BadgeProps) {
  return <div className="bg-primary-500">{label}</div>;
}
