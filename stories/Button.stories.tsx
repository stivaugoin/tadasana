import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { Fragment } from "react";
import { Button, ButtonProps } from "../src/components/Button";
import { CodeIcon } from "./helpers/Icons";
import { Row } from "./helpers/Row";
import { Rows } from "./helpers/Rows";

export default {
  title: "Component/Button",
  component: Button,
  parameters: { actions: { argTypesRegex: "^on.*" }, badges: [BADGE.BETA] },
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

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  size: "large",
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

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  disabled: true,
};

const stories: {
  variants: Array<ButtonProps["variant"]>;
  sizes: Array<ButtonProps["size"]>;
} = {
  variants: ["normal", "primary", "success", "danger", "warning"],
  sizes: ["small", "medium", "large"],
};

export const AllButtons = (): JSX.Element => {
  return (
    <Rows>
      {stories.variants.map((variant) => {
        return (
          <Fragment key={variant}>
            {stories.sizes.map((size) => {
              return (
                <Row key={`${variant}-${size}`}>
                  <Button size={size} variant={variant}>
                    {variant}
                  </Button>
                  <Button disabled size={size} variant={variant}>
                    {variant}
                  </Button>
                  <Button size={size} startIcon={CodeIcon} variant={variant}>
                    {variant}
                  </Button>
                  <Button size={size} variant={variant}>
                    <CodeIcon />
                  </Button>
                </Row>
              );
            })}
          </Fragment>
        );
      })}
    </Rows>
  );
};
AllButtons.argTypes = {
  children: { control: null, table: { disable: true } },
  size: { control: null, table: { disable: true } },
  variant: { control: null, table: { disable: true } },
};
