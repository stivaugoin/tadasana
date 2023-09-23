import type { Preview } from "@storybook/react";
import { Decorator } from "./Decorator";

import "../src/global.css";

const controls = {
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
  sort: "requiredFirst",
};

const preview: Preview = {
  parameters: {
    docs: { controls },
    controls,
  },

  decorators: [Decorator],
};

export default preview;
