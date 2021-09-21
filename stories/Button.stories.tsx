import { CodeIcon } from "@heroicons/react/solid";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../src/components/Button";
import { Row } from "./helpers/Row";
import { Rows } from "./helpers/Rows";

export default {
  title: "Component/Button",
  component: Button,
  parameters: { actions: { argTypesRegex: "^on.*" } },
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Click me!",
    },
    onClick: {
      action: "clicked",
      control: null,
      table: { disable: true },
    },
    size: { control: "inline-radio" },
    startIcon: { control: null, table: { disable: true } },
    type: { control: null, table: { disable: true } },
    variant: { control: "inline-radio" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium",
  size: "medium",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "danger",
};

export const Normal = Template.bind({});
Normal.args = {
  children: "Normal",
  variant: "normal",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning",
  variant: "warning",
};

export const IconAsChildren = Template.bind({});
IconAsChildren.args = {
  children: <CodeIcon />,
};
IconAsChildren.argTypes = {
  children: { control: null, table: { disable: true } },
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: "Button",
  startIcon: CodeIcon,
};
StartIcon.storyName = "StartIcon";

export const AllButtons = (): JSX.Element => {
  return (
    <Rows>
      <Row>
        <Button size="medium" variant="primary">
          Primary
        </Button>
        <Button size="medium" startIcon={CodeIcon} variant="primary">
          Primary
        </Button>
        <Button size="medium" variant="primary">
          <CodeIcon />
        </Button>

        <Button size="small" variant="primary">
          Primary
        </Button>
        <Button size="small" startIcon={CodeIcon} variant="primary">
          Primary
        </Button>
        <Button size="small" variant="primary">
          <CodeIcon />
        </Button>
      </Row>

      <Row>
        <Button size="medium" variant="normal">
          Default
        </Button>
        <Button size="medium" startIcon={CodeIcon} variant="normal">
          Default
        </Button>
        <Button size="medium" variant="normal">
          <CodeIcon />
        </Button>

        <Button size="small" variant="normal">
          Default
        </Button>
        <Button size="small" startIcon={CodeIcon} variant="normal">
          Default
        </Button>
        <Button size="small" variant="normal">
          <CodeIcon />
        </Button>
      </Row>

      <Row>
        <Button size="medium" variant="success">
          Success
        </Button>
        <Button size="medium" startIcon={CodeIcon} variant="success">
          Success
        </Button>
        <Button size="medium" variant="success">
          <CodeIcon />
        </Button>

        <Button size="small" variant="success">
          Success
        </Button>
        <Button size="small" startIcon={CodeIcon} variant="success">
          Success
        </Button>
        <Button size="small" variant="success">
          <CodeIcon />
        </Button>
      </Row>

      <Row>
        <Button size="medium" variant="danger">
          Danger
        </Button>
        <Button size="medium" startIcon={CodeIcon} variant="danger">
          Danger
        </Button>
        <Button size="medium" variant="danger">
          <CodeIcon />
        </Button>

        <Button size="small" variant="danger">
          Danger
        </Button>
        <Button size="small" startIcon={CodeIcon} variant="danger">
          Danger
        </Button>
        <Button size="small" variant="danger">
          <CodeIcon />
        </Button>
      </Row>

      <Row>
        <Button size="medium" variant="warning">
          Warning
        </Button>
        <Button size="medium" startIcon={CodeIcon} variant="warning">
          Warning
        </Button>
        <Button size="medium" variant="warning">
          <CodeIcon />
        </Button>

        <Button size="small" variant="warning">
          Warning
        </Button>
        <Button size="small" startIcon={CodeIcon} variant="warning">
          Warning
        </Button>
        <Button size="small" variant="warning">
          <CodeIcon />
        </Button>
      </Row>
    </Rows>
  );
};
AllButtons.argTypes = {
  children: { control: null, table: { disable: true } },
  size: { control: null, table: { disable: true } },
  variant: { control: null, table: { disable: true } },
};
