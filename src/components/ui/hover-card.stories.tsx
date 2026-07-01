import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarDays } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-sm">
            <h4 className="font-semibold">@nextjs</h4>
            <p className="text-foreground-muted">
              The React framework for production.
            </p>
            <div className="flex items-center gap-1 pt-1 text-foreground-muted">
              <CalendarDays className="size-3" />
              <span className="text-xs">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <HoverCard key={side} openDelay={50}>
          <HoverCardTrigger asChild>
            <Button variant="outline">{side}</Button>
          </HoverCardTrigger>
          <HoverCardContent side={side}>Side: {side}</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};

export const FastOpen: Story = {
  render: () => (
    <HoverCard openDelay={50} closeDelay={50}>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover quickly</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        Opens after 50ms, closes after 50ms.
      </HoverCardContent>
    </HoverCard>
  ),
};
