import type { Preview } from "@storybook/react";
import { Decorator } from "./Decorator";

import "../src/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [Decorator],
};

export default preview;
