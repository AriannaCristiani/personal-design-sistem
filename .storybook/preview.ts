import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import "../src/styles/reset.css";
import "../src/styles/variables.css";
import "../src/styles/typography.css";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "theme-light",
        dark: "theme-dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
