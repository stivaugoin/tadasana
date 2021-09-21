import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../../src/components/Card";
import { Text } from "../../src/components/Text";

export default {
  title: "Component/Card/Body",
  component: Card.Body,
} as ComponentMeta<typeof Card.Body>;

const Template: ComponentStory<typeof Card.Body> = (args) => (
  <div className="w-full max-w-lg">
    <Card>
      <Card.Body {...args} />
    </Card>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  ),
};
