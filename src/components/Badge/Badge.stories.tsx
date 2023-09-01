import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    label: "Badge",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Base: Story = {};

// Sizes
export const Small: Story = {
  args: { size: "sm" },
  name: "Size - Small",
};
export const Medium: Story = {
  args: { size: "md" },
  name: "Size - Medium",
};
export const Large: Story = {
  args: { size: "lg" },
  name: "Size - Large",
};

// Variants
export const Default: Story = {
  args: { variant: "default" },
  name: "Variant - Default",
};
export const Primary: Story = {
  args: { variant: "primary" },
  name: "Variant - Primary",
};
export const Success: Story = {
  args: { variant: "success" },
  name: "Variant - Success",
};
export const Danger: Story = {
  args: { variant: "danger" },
  name: "Variant - Danger",
};
export const Warning: Story = {
  args: { variant: "warning" },
  name: "Variant - Warning",
};
