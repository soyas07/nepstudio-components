import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

// Metadata configuration
const meta:Meta<typeof Container> = {
    title: 'Layouts/Container',
    component: Container,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary story
export const Default: Story = {
    args: {
        maxWidth: 'lg',
        className: ''
    },
};

// Secondary story
export const SmallContainer: Story = {
    args: {
        maxWidth: 'sm',
        className: ''
    },
};

// Custom examples
export const MediumContainer: Story = {
    args: {
        maxWidth: 'md',
        className: ''
    },
};
