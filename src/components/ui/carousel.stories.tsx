import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const meta: Meta<typeof Carousel> = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-72">
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, i) => (
          <CarouselItem key={i}>
            <div className="flex aspect-square items-center justify-center rounded-md border bg-background-muted text-3xl font-semibold">
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <Carousel className="w-96" opts={{ align: 'start' }}>
      <CarouselContent className="-ml-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CarouselItem key={i} className="pl-4 basis-1/3">
            <div className="flex aspect-square items-center justify-center rounded-md border bg-background-muted text-xl font-semibold">
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Carousel orientation="vertical" className="w-48">
      <CarouselContent className="h-48">
        {Array.from({ length: 4 }).map((_, i) => (
          <CarouselItem key={i}>
            <div className="flex h-full items-center justify-center rounded-md border bg-background-muted text-2xl font-semibold">
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
