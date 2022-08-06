import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "@tadasana/core/src";

export default {
  title: "Core/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Button",
  variant: "normal",
};
