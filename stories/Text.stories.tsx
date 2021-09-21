import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text } from "../src/components/Text";
import { Row } from "./helpers/Row";
import { Rows } from "./helpers/Rows";

export default {
  title: "Component/Text",
  component: Text,
  argTypes: {
    bold: {
      defaultValue: false,
    },
    children: {
      control: "text",
      defaultValue:
        '"It takes a lot of hard work to make something simple." - Steve Jobs',
    },
    italic: {
      defaultValue: false,
    },
    size: { control: "inline-radio" },
    variant: { control: "inline-radio" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};

export const Normal = Template.bind({});
Normal.args = {
  variant: "normal",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

export const AllTexts = (): JSX.Element => {
  return (
    <Rows>
      <Row>
        <Text size="small" variant="danger">
          Danger
        </Text>
        <Text size="small" variant="muted">
          Muted
        </Text>
        <Text size="small" variant="normal">
          Normal
        </Text>
        <Text size="small" variant="primary">
          Primary
        </Text>
        <Text size="small" variant="success">
          Success
        </Text>
        <Text size="small" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text size="medium" variant="danger">
          Danger
        </Text>
        <Text size="medium" variant="muted">
          Muted
        </Text>
        <Text size="medium" variant="normal">
          Normal
        </Text>
        <Text size="medium" variant="primary">
          Primary
        </Text>
        <Text size="medium" variant="success">
          Success
        </Text>
        <Text size="medium" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text size="large" variant="danger">
          Danger
        </Text>
        <Text size="large" variant="muted">
          Muted
        </Text>
        <Text size="large" variant="normal">
          Normal
        </Text>
        <Text size="large" variant="primary">
          Primary
        </Text>
        <Text size="large" variant="success">
          Success
        </Text>
        <Text size="large" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text bold size="small" variant="danger">
          Danger
        </Text>
        <Text bold size="small" variant="muted">
          Muted
        </Text>
        <Text bold size="small" variant="normal">
          Normal
        </Text>
        <Text bold size="small" variant="primary">
          Primary
        </Text>
        <Text bold size="small" variant="success">
          Success
        </Text>
        <Text bold size="small" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text bold size="medium" variant="danger">
          Danger
        </Text>
        <Text bold size="medium" variant="muted">
          Muted
        </Text>
        <Text bold size="medium" variant="normal">
          Normal
        </Text>
        <Text bold size="medium" variant="primary">
          Primary
        </Text>
        <Text bold size="medium" variant="success">
          Success
        </Text>
        <Text bold size="medium" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text bold size="large" variant="danger">
          Danger
        </Text>
        <Text bold size="large" variant="muted">
          Muted
        </Text>
        <Text bold size="large" variant="normal">
          Normal
        </Text>
        <Text bold size="large" variant="primary">
          Primary
        </Text>
        <Text bold size="large" variant="success">
          Success
        </Text>
        <Text bold size="large" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text italic size="small" variant="danger">
          Danger
        </Text>
        <Text italic size="small" variant="muted">
          Muted
        </Text>
        <Text italic size="small" variant="normal">
          Normal
        </Text>
        <Text italic size="small" variant="primary">
          Primary
        </Text>
        <Text italic size="small" variant="success">
          Success
        </Text>
        <Text italic size="small" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text italic size="medium" variant="danger">
          Danger
        </Text>
        <Text italic size="medium" variant="muted">
          Muted
        </Text>
        <Text italic size="medium" variant="normal">
          Normal
        </Text>
        <Text italic size="medium" variant="primary">
          Primary
        </Text>
        <Text italic size="medium" variant="success">
          Success
        </Text>
        <Text italic size="medium" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text italic size="large" variant="danger">
          Danger
        </Text>
        <Text italic size="large" variant="muted">
          Muted
        </Text>
        <Text italic size="large" variant="normal">
          Normal
        </Text>
        <Text italic size="large" variant="primary">
          Primary
        </Text>
        <Text italic size="large" variant="success">
          Success
        </Text>
        <Text italic size="large" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text bold italic size="small" variant="danger">
          Danger
        </Text>
        <Text bold italic size="small" variant="muted">
          Muted
        </Text>
        <Text bold italic size="small" variant="normal">
          Normal
        </Text>
        <Text bold italic size="small" variant="primary">
          Primary
        </Text>
        <Text bold italic size="small" variant="success">
          Success
        </Text>
        <Text bold italic size="small" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text bold italic size="medium" variant="danger">
          Danger
        </Text>
        <Text bold italic size="medium" variant="muted">
          Muted
        </Text>
        <Text bold italic size="medium" variant="normal">
          Normal
        </Text>
        <Text bold italic size="medium" variant="primary">
          Primary
        </Text>
        <Text bold italic size="medium" variant="success">
          Success
        </Text>
        <Text bold italic size="medium" variant="warning">
          Warning
        </Text>
      </Row>
      <Row>
        <Text bold italic size="large" variant="danger">
          Danger
        </Text>
        <Text bold italic size="large" variant="muted">
          Muted
        </Text>
        <Text bold italic size="large" variant="normal">
          Normal
        </Text>
        <Text bold italic size="large" variant="primary">
          Primary
        </Text>
        <Text bold italic size="large" variant="success">
          Success
        </Text>
        <Text bold italic size="large" variant="warning">
          Warning
        </Text>
      </Row>
    </Rows>
  );
};
AllTexts.argTypes = {
  bold: { control: null, table: { disable: true } },
  children: { control: null, table: { disable: true } },
  italic: { control: null, table: { disable: true } },
  size: { control: null, table: { disable: true } },
  variant: { control: null, table: { disable: true } },
};
