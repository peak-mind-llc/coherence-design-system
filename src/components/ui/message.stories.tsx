import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from './message';
import { Bubble, BubbleContent } from './bubble';

const meta: Meta<typeof Message> = {
  title: 'UI/Message',
  component: Message,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Message>;

export const Incoming: Story = {
  render: () => (
    <Message className="w-96">
      <MessageAvatar className="size-8 text-xs">CM</MessageAvatar>
      <MessageContent>
        <MessageHeader>Clinical Mentor</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>Frontal alpha asymmetry stands out on CRJA.</BubbleContent>
        </Bubble>
        <MessageFooter>9:42</MessageFooter>
      </MessageContent>
    </Message>
  ),
};

export const Outgoing: Story = {
  render: () => (
    <Message align="end" className="w-96">
      <MessageContent>
        <Bubble variant="default" align="end">
          <BubbleContent>Pull it up alongside the norms.</BubbleContent>
        </Bubble>
        <MessageFooter>9:43</MessageFooter>
      </MessageContent>
    </Message>
  ),
};
