import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../src/components/Button";
import { Card } from "../src/components/Card";
import { Text } from "../src/components/Text";
import { DotsHorizontalIcon } from "./helpers/Icons";

export default {
  title: "Component/Card",
  component: Card,
  parameters: { badges: [BADGE.BETA] },
} as ComponentMeta<typeof Card>;

export function Default(): JSX.Element {
  return (
    <Card>
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
    </Card>
  );
}

export function Body(): JSX.Element {
  return (
    <Card>
      <Card.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Card.Body>
    </Card>
  );
}

// HEADER
const TemplateHeader: ComponentStory<typeof Card.Header> = (args) => (
  <div className="max-w-lg">
    <Card>
      <Card.Header {...args} />
    </Card>
  </div>
);

export const Header = TemplateHeader.bind({});
Header.args = {
  title: "Card header",
};

export const HeaderActions = TemplateHeader.bind({});
HeaderActions.args = {
  actions: [
    <Button key="one" size="small" variant="primary">
      Click me!
    </Button>,
    <Button key="two" size="small" variant="normal">
      <DotsHorizontalIcon />
    </Button>,
  ],
  title: "Card header with action",
};

// FOOTER
const TemplateFooter: ComponentStory<typeof Card.Footer> = (args) => (
  <div className="w-full max-w-lg">
    <Card>
      <Card.Footer {...args} />
    </Card>
  </div>
);

export const Footer = TemplateFooter.bind({});
Footer.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
};

export const FooterJustifyAround = TemplateFooter.bind({});
FooterJustifyAround.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "around",
};

export const FooterJustifyBetween = TemplateFooter.bind({});
FooterJustifyBetween.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "between",
};

export const FooterJustifyCenter = TemplateFooter.bind({});
FooterJustifyCenter.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "center",
};

export const FooterJustifyEnd = TemplateFooter.bind({});
FooterJustifyEnd.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "end",
};

export const FooterJustifyStart = TemplateFooter.bind({});
FooterJustifyStart.args = {
  children: (
    <>
      <Button variant="primary">Click me!</Button>
      <Button variant="normal">Cancel</Button>
    </>
  ),
  justify: "start",
};
