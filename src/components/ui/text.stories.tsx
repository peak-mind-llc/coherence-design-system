import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { children: 'The quick brown fox jumps over the lazy dog' },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Body: Story = {};

export const Heading2: Story = {
  args: { variant: 'heading-2', children: 'Coherence Workstation' },
};

/** The full closed set — one row per variant (use `asChild` for semantic tags in real screens). */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="heading-1">heading-1 — Coherence</Text>
      <Text variant="heading-2">heading-2 — Coherence Workstation</Text>
      <Text variant="heading-3">heading-3 — Clinical EEG analysis</Text>
      <Text variant="heading-4">heading-4 — Section heading</Text>
      <Text variant="body-lg">body-lg — The quick brown fox jumps over the lazy dog</Text>
      <Text variant="body">body — The quick brown fox jumps over the lazy dog</Text>
      <Text variant="body-sm">body-sm — The quick brown fox jumps over the lazy dog</Text>
      <Text variant="body-xs">body-xs — The quick brown fox jumps over the lazy dog</Text>
    </div>
  ),
};

/** Weight applies to body variants (headings carry Semibold intrinsically). */
export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text variant="body" weight="regular">body / regular (400)</Text>
      <Text variant="body" weight="medium">body / medium (500)</Text>
      <Text variant="body" weight="bold">body / bold (Semibold 600)</Text>
    </div>
  ),
};

/** Render semantic elements with `asChild` for correct document structure / a11y. */
export const AsChildHeadings: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text variant="heading-1" asChild><h1>Real &lt;h1&gt;</h1></Text>
      <Text variant="heading-2" asChild><h2>Real &lt;h2&gt;</h2></Text>
      <Text variant="body" asChild><p>Real &lt;p&gt; paragraph.</p></Text>
    </div>
  ),
};
