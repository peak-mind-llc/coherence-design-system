import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bubble, BubbleContent, BubbleGroup } from './bubble';

const meta: Meta<typeof Bubble> = {
  title: 'UI/Bubble',
  component: Bubble,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Bubble>;

const VARIANTS = [
  'default',
  'secondary',
  'muted',
  'tinted',
  'outline',
  'ghost',
  'destructive',
] as const;

export const Default: Story = {
  render: () => (
    <Bubble>
      <BubbleContent>How are the alpha rhythms looking today?</BubbleContent>
    </Bubble>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      {VARIANTS.map((v) => (
        <Bubble key={v} variant={v}>
          <BubbleContent>{v}</BubbleContent>
        </Bubble>
      ))}
    </div>
  ),
};

export const Conversation: Story = {
  render: () => (
    <BubbleGroup className="w-80">
      <Bubble variant="muted">
        <BubbleContent>Let&apos;s review the eyes-closed segment.</BubbleContent>
      </Bubble>
      <Bubble variant="default" align="end">
        <BubbleContent>Sounds good — pull it up.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
};
