import type { Meta, StoryObj } from '@storybook/react-vite';
import { BadgeCheck, Star } from 'lucide-react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: 'Badge' },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Destructive: Story = { args: { variant: 'destructive' } };
export const Outline: Story = { args: { variant: 'outline' } };

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge><BadgeCheck />Verified</Badge>
      <Badge variant="secondary"><Star />Featured</Badge>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Badge asChild>
      <a href="#">Open profile</a>
    </Badge>
  ),
};
