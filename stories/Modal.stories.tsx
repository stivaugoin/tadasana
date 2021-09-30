import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../src/components/Button";
import { Modal } from "../src/components/Modal";
import { Text } from "../src/components/Text";
import { useModal } from "../src/hooks/useModal";

export default {
  title: "Component/Modal",
  component: Modal,
  parameters: {
    chromatic: { delay: 2000 },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { close, isOpen, open } = useModal(true);

  return (
    <div className="w-full h-full">
      <Button onClick={open} variant="primary">
        Open modal
      </Button>

      <Modal {...args} onRequestClose={close} isOpen={isOpen} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  ),
};

export const Title = Template.bind({});
Title.args = {
  children: <Modal.Title>Lorem ipsum dolor sit amet</Modal.Title>,
};

export const Description = Template.bind({});
Description.args = {
  children: (
    <Modal.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Modal.Description>
  ),
};

export const CloseButton = Template.bind({});
CloseButton.args = {
  children: (
    <>
      <Modal.CloseButton />
      <Text>Lorem ipsum dolor sit amet</Text>
    </>
  ),
};
