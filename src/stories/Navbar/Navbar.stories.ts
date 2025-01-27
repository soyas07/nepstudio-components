import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import React from 'react';

// Metadata configuration
const meta:Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary story
export const Default: Story = {
    args: {
        logo: {alt: "", width: "80px", height: "90px", src: "https://img.freepik.com/free-vector/coloured-logo-template-design_1222-36.jpg?t=st=1736132171~exp=1736135771~hmac=a7ab5ec9938d5199424b4804422e80e8d1b270505c597e7e29a30311170a6711&w=1060", url: "#"},
        itemLists: ["item1", "item2", "item3", "item4"],
        ctaBtn:  React.createElement('button', null, 'Book'),
        resolution: { sml: '473px', med: '768px', lrg: '994px' }
    },
};