import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <AspectRatio
        ratio={16 / 9}
        className="bg-background-muted rounded-md flex items-center justify-center text-foreground-muted text-sm"
      >
        16 : 9
      </AspectRatio>
    </div>
  ),
};
