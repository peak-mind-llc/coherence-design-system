import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to WAI-ARIA.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It picks up tokens from the design system.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. Driven by `tw-animate-css` utilities.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['item-1', 'item-2']} className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Notification settings</AccordionTrigger>
        <AccordionContent>Manage how and when you receive notifications.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Privacy &amp; security</AccordionTrigger>
        <AccordionContent>Control who can see your data.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Billing &amp; subscription</AccordionTrigger>
        <AccordionContent>Update your plan or payment method.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Account history</AccordionTrigger>
        <AccordionContent>Recent account activity.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Premium features</AccordionTrigger>
        <AccordionContent>Available on the Pro plan.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Email updates</AccordionTrigger>
        <AccordionContent>Configure your notification preferences.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Borders: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80 border rounded-md">
      <AccordionItem value="item-1" className="border-b last:border-b-0 px-4">
        <AccordionTrigger>What's included in billing?</AccordionTrigger>
        <AccordionContent>Your subscription and any add-ons.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b last:border-b-0 px-4">
        <AccordionTrigger>How is security handled?</AccordionTrigger>
        <AccordionContent>SOC 2 compliance and end-to-end encryption.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b last:border-b-0 px-4">
        <AccordionTrigger>What integrations are supported?</AccordionTrigger>
        <AccordionContent>All major providers.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
