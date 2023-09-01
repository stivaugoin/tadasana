interface BadgeProps {
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "default" | "success" | "danger" | "warning";
}

export function Badge({ label, size, variant }: BadgeProps) {
  return <div>{label}</div>;
}
