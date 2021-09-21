import { CodeIcon } from "@heroicons/react/solid";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Badge } from "../src/components/Badge";
import { Row } from "./helpers/Row";
import { Rows } from "./helpers/Rows";

export default {
  title: "Component/Badge",
  component: Badge,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Badge",
    },
    startIcon: { control: null, table: { disable: true } },
    variant: { control: "inline-radio" },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  size: "large",
};

export const Normal = Template.bind({});
Normal.args = {
  children: "Normal",
  variant: "normal",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "danger",
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

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: "Button",
  size: "small",
  startIcon: CodeIcon,
  variant: "normal",
};
StartIcon.storyName = "StartIcon";

export const AllBadge = (): JSX.Element => {
  return (
    <Rows>
      <Row>
        <Badge size="large" variant="primary">
          Primary
        </Badge>
        <Badge size="large" startIcon={CodeIcon} variant="primary">
          Primary
        </Badge>

        <Badge size="small" variant="primary">
          Primary
        </Badge>
        <Badge size="small" startIcon={CodeIcon} variant="primary">
          Primary
        </Badge>
      </Row>

      <Row>
        <Badge size="large" variant="normal">
          Default
        </Badge>
        <Badge size="large" startIcon={CodeIcon} variant="normal">
          Default
        </Badge>

        <Badge size="small" variant="normal">
          Default
        </Badge>
        <Badge size="small" startIcon={CodeIcon} variant="normal">
          Default
        </Badge>
      </Row>

      <Row>
        <Badge size="large" variant="success">
          Success
        </Badge>
        <Badge size="large" startIcon={CodeIcon} variant="success">
          Success
        </Badge>

        <Badge size="small" variant="success">
          Success
        </Badge>
        <Badge size="small" startIcon={CodeIcon} variant="success">
          Success
        </Badge>
      </Row>

      <Row>
        <Badge size="large" variant="danger">
          Danger
        </Badge>
        <Badge size="large" startIcon={CodeIcon} variant="danger">
          Danger
        </Badge>

        <Badge size="small" variant="danger">
          Danger
        </Badge>
        <Badge size="small" startIcon={CodeIcon} variant="danger">
          Danger
        </Badge>
      </Row>

      <Row>
        <Badge size="large" variant="warning">
          Warning
        </Badge>
        <Badge size="large" startIcon={CodeIcon} variant="warning">
          Warning
        </Badge>

        <Badge size="small" variant="warning">
          Warning
        </Badge>
        <Badge size="small" startIcon={CodeIcon} variant="warning">
          Warning
        </Badge>
      </Row>
    </Rows>
  );
};
