import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../../src/components/Button";
import { Card } from "../../src/components/Card";

export default {
  title: "Component/Card/Footer",
  component: Card.Footer,
} as ComponentMeta<typeof Card.Footer>;

const Template: ComponentStory<typeof Card.Footer> = (args) => (
  <div className="w-full max-w-lg">
    <Card>
      <Card.Footer {...args} />
    </Card>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
};

export const JustifyAround = Template.bind({});
JustifyAround.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "around",
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "between",
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "center",
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "end",
};

export const JustifyStart = Template.bind({});
JustifyStart.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "start",
};
