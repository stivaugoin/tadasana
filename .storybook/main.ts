import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@geometricpanda/storybook-addon-badges",
    "@storybook/addon-a11y",
  ],
  docs: { autodocs: true },
  framework: "@storybook/react-vite",
  stories: [
    "../src/components/**/*.stories.tsx",
    "../src/documentation/**/*.stories.mdx",
  ],
  typescript: {
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
    },
  },
};

export default config;
