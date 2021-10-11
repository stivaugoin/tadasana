import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text, TextProps } from "../src/components/Text";
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
  parameters: { badges: [BADGE.BETA, BADGE.EXPERIMENTAL] },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const XSmall = Template.bind({});
XSmall.args = {
  size: "xs",
};
XSmall.storyName = "xs";

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};
Small.storyName = "sm";

export const Base = Template.bind({});
Base.args = {
  size: "base",
};
Base.storyName = "base";

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};
Large.storyName = "lg";

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xl",
};
XLarge.storyName = "xl";

export const XXLarge = Template.bind({});
XXLarge.args = {
  size: "2xl",
};
XXLarge.storyName = "2xl";

export const XXXLarge = Template.bind({});
XXXLarge.args = {
  size: "3xl",
};
XXXLarge.storyName = "3xl";

export const XXXXLarge = Template.bind({});
XXXXLarge.args = {
  size: "4xl",
};
XXXXLarge.storyName = "4xl";

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

const stories: {
  sizes: Array<TextProps["size"]>;
  variants: Array<TextProps["variant"]>;
} = {
  sizes: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"],
  variants: ["normal", "primary", "success", "warning", "danger", "muted"],
};

export const AllTexts = (): JSX.Element => {
  return (
    <Rows>
      {stories.sizes.map((size) => (
        <Row key={size}>
          {stories.variants.map((variant) => (
            <Text key={`${size}-${variant}`} size={size} variant={variant}>
              {variant}
            </Text>
          ))}
        </Row>
      ))}
      <Row>
        <Text bold>Bold</Text>
        <Text italic>Italic</Text>
        <Text bold italic>
          Bold Italic
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
