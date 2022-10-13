import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text';


export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    children: 'Lorem ipsum.',
    size: 'sm',
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    children: 'Lorem ipsum.',
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text With P Tag</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    },
  }
};