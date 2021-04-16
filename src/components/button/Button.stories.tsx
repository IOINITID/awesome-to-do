import React from 'react';
import { Story } from '@storybook/react';
import Button from './index';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    active: {
      // description: '',
      control: {
        type: 'boolean',
      },
    },
    theme: {
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
    },
  },
  args: {
    theme: 'light',
  },
};

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: args.theme }}>
    <Button active={args.active}>
      <span>Lang</span>
    </Button>
  </ThemeProvider>
);

export const Default = Template.bind({});
