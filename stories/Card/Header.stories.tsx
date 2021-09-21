import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../../src/components/Button";
import { Card } from "../../src/components/Card";

export default {
  title: "Component/Card/Header",
  component: Card.Header,
  argTypes: {
    actions: {
      control: null,
      table: {
        type: {
          summary: "Array<React.ReactNode>",
        },
      },
    },
  },
} as ComponentMeta<typeof Card.Header>;

const Template: ComponentStory<typeof Card.Header> = (args) => (
  <div className="max-w-lg">
    <Card>
      <Card.Header {...args} />
    </Card>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Card header",
};

export const Actions = Template.bind({});
Actions.args = {
  actions: [
    <Button key="one" size="small" variant="primary">
      Click me!
    </Button>,
    <Button key="two" size="small" variant="normal">
      <DotsHorizontalIcon />
    </Button>,
  ],
  title: "Card header with action",
};
