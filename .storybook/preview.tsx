import type { Preview } from "@storybook/react";
import { Decorator } from "./Decorator";

import "../src/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
  decorators: [Decorator],
};

export default preview;
