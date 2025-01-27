import type { Meta, StoryObj } from '@storybook/react';
import CustomCursor from './CustomCursor';

// Metadata configuration
const meta:Meta<typeof CustomCursor> = {
  title: 'Components/CustomCursor',
  component: CustomCursor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof CustomCursor>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary story
export const Default: Story = {
  args: {
    size: 20,
    color: 'black',
  },
};

// Secondary story
export const LargeBlueCursor: Story = {
  args: {
    size: 50,
    color: 'blue',
    label: 'View'
  },
};

// Custom examples
export const SmallRedCursor: Story = {
  args: {
    size: 10,
    color: 'red',
  },
};
