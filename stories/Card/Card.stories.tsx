import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../../src/components/Button";
import { Card } from "../../src/components/Card";
import { Text } from "../../src/components/Text";

export default {
  title: "Component/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Card.Header title="Card header" />
      <Card.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Click me!</Button>
        <Button variant="normal">Cancel</Button>
      </Card.Footer>
    </>
  ),
};
