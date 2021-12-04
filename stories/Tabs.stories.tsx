import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Tabs } from "../src/components/Tabs";

export default {
  title: "Component/Tabs",
  component: Tabs,
  parameters: { badges: [BADGE.BETA] },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <div className="w-full max-w-lg">
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Button>Tab #1</Tabs.Button>
        <Tabs.Button>Tab #2</Tabs.Button>
      </Tabs.List>

      <Tabs.Content>Content #1</Tabs.Content>
      <Tabs.Content>Content #2</Tabs.Content>
    </Tabs>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const DefaultIndex = Template.bind({});
DefaultIndex.args = { defaultIndex: 1 };
DefaultIndex.storyName = "defaultIndex";
