import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "../src/components/Input";
import { Label } from "../src/components/Label";

export default {
  title: "Component/Label",
  component: Label,
  argTypes: {
    htmlFor: {
      defaultValue: "text",
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Label for input",
};

export const WithInput = (): JSX.Element => {
  return (
    <div className="w-full max-w-lg">
      <Label htmlFor="withInput">Name</Label>
      <Input id="withInput" type="text" />
    </div>
  );
};
WithInput.argTypes = {
  htmlFor: { control: null, table: { disable: true } },
};
