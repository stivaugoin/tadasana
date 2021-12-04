import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TextArea, TextAreaProps } from "../src/components/TextArea";
import { Row } from "./helpers/Row";
import { Rows } from "./helpers/Rows";

export default {
  title: "Component/TextArea",
  component: TextArea,
  parameters: { badges: [BADGE.BETA] },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <div className="w-full max-w-lg">
    <TextArea {...args} />
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

const stories: {
  sizes: Array<TextAreaProps["size"]>;
} = {
  sizes: ["small", "medium"],
};

export const AllTextAreas = (): JSX.Element => {
  return (
    <div className="w-full max-w-sm">
      <Rows>
        {stories.sizes.map((size) => (
          <Row key={size}>
            <TextArea size={size} />
            <TextArea defaultValue={`${size} - defaultValue`} size={size} />
            <TextArea
              defaultValue={`${size} - disabled`}
              disabled
              size={size}
            />
            <TextArea
              defaultValue={`${size} - hasError`}
              hasError
              size={size}
            />
            <TextArea placeholder={`${size} - placeholder`} size={size} />
          </Row>
        ))}
      </Rows>
    </div>
  );
};
AllTextAreas.argTypes = {
  hasError: { control: null, table: { disable: true } },
  type: { control: null, table: { disable: true } },
  size: { control: null, table: { disable: true } },
};
