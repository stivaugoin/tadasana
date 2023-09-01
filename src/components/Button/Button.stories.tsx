import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

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
