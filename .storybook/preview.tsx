import type { Preview } from "@storybook/react";
import { Decorator } from "./Decorator";

import "../src/global.css";

const preview: Preview = {
  argTypes: {
    variant: { control: { type: "inline-radio" } },
  },
  decorators: [Decorator],
};

export default preview;
