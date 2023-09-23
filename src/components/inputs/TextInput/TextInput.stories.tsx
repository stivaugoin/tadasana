import { BADGE } from "@geometricpanda/storybook-addon-badges";

import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Inputs/TextInput",

  args: {
    label: "Label",
  },

  parameters: {
    badges: [BADGE.BETA],
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Base: Story = {};

export const Error: Story = {
  args: { error: "Error message" },
  name: "With Error",
};

export const Placeholder: Story = {
  args: { placeholder: "Placeholder" },
  name: "With Placeholder",
};

export const HideLabel: Story = {
  args: { hideLabel: true },
};
