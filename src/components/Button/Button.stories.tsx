import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  parameters: {
    docs: {
      description: {
        component: "A button component.",
      },
    },
  },
  args: {
    children: "Button text",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {};

// Variants
export const Default: Story = {
  args: { variant: "default" },
  name: "Variant - Default",
};
export const Primary: Story = {
  args: { variant: "primary" },
  name: "Variant - Primary",
};
export const Danger: Story = {
  args: { variant: "danger" },
  name: "Variant - Danger",
};
