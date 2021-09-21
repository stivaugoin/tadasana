import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "../src/components/Input";
import { Row } from "./helpers/Row";
import { Rows } from "./helpers/Rows";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    type: {
      defaultValue: "text",
      control: {
        options: ["number", "password", "text"],
        type: "inline-radio",
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div className="w-full max-w-lg">
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});

export const HasError = Template.bind({});
HasError.args = {
  hasError: true,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const AllInputs = (): JSX.Element => {
  return (
    <div className="w-full max-w-lg">
      <Rows>
        <Row>
          <Input size="medium" type="text" />
          <Input size="small" type="text" />
        </Row>
        <Row>
          <Input hasError size="medium" type="text" />
          <Input hasError size="small" type="text" />
        </Row>
      </Rows>
    </div>
  );
};
AllInputs.argTypes = {
  hasError: { control: null, table: { disable: true } },
  type: { control: null, table: { disable: true } },
  size: { control: null, table: { disable: true } },
};
