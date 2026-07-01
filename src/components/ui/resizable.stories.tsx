import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './resizable';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-48 w-96 rounded-md border"
    >
      <ResizablePanel defaultSize={40} className="flex items-center justify-center text-sm">
        Left
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} className="flex items-center justify-center text-sm">
        Right
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
