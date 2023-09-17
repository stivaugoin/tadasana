import { BADGE } from "@geometricpanda/storybook-addon-badges";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",

  args: {
    children: "Click me!",
  },

  argTypes: {
    onClick: { action: "clicked", table: { disable: true } },
  },

  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: [
          "A button component that can be used to trigger actions or events.",
          "See the MDN docs for more information on the [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).",
        ].join("<br />"),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {};

// Variants
export const Default: Story = {
  args: {},
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
