import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="size-6"><AvatarFallback>S</AvatarFallback></Avatar>
      <Avatar className="size-8"><AvatarFallback>M</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
      <Avatar className="size-12"><AvatarFallback>L</AvatarFallback></Avatar>
      <Avatar className="size-16"><AvatarFallback>XL</AvatarFallback></Avatar>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>A</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
    </AvatarGroup>
  ),
};
