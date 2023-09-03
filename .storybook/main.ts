import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  docs: { autodocs: true },
  framework: "@storybook/react-vite",
  stories: [
    "../src/components/**/*.stories.tsx",
    "../src/documentation/**/*.stories.mdx",
  ],
};

export default config;
