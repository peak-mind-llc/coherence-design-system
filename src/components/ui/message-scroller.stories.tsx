import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from './message-scroller';
import { Message, MessageContent } from './message';
import { Bubble, BubbleContent } from './bubble';

const meta: Meta<typeof MessageScroller> = {
  title: 'UI/MessageScroller',
  component: MessageScroller,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof MessageScroller>;

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <div className="h-80 w-96 rounded-2xl border border-border-default">
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <MessageScrollerItem key={i}>
                  <Message align={i % 2 ? 'end' : 'start'}>
                    <MessageContent>
                      <Bubble
                        variant={i % 2 ? 'default' : 'muted'}
                        align={i % 2 ? 'end' : 'start'}
                      >
                        <BubbleContent>Message {i + 1}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton direction="end" />
        </MessageScroller>
      </div>
    </MessageScrollerProvider>
  ),
};
