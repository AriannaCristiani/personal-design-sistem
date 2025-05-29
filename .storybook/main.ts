import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        viewport: true, 
      },
    },
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport', 
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
