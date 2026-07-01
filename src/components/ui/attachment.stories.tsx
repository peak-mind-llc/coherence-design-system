import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileText, Image as ImageIcon, X } from 'lucide-react';
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from './attachment';

const meta: Meta<typeof Attachment> = {
  title: 'UI/Attachment',
  component: Attachment,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Attachment>;

export const Default: Story = {
  render: () => (
    <Attachment>
      <AttachmentMedia>
        <FileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>CRJA_2026-02-27.pdf</AttachmentTitle>
        <AttachmentDescription>1.2 MB · PDF</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <X />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
};

export const Uploading: Story = {
  render: () => (
    <Attachment state="uploading">
      <AttachmentMedia>
        <FileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>uploading…</AttachmentTitle>
        <AttachmentDescription>3.1 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Attachment state="error">
      <AttachmentMedia>
        <FileText />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>scan.edf</AttachmentTitle>
        <AttachmentDescription>upload failed</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <X />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
};

export const Group: Story = {
  render: () => (
    <AttachmentGroup className="max-w-md">
      {[1, 2, 3, 4].map((i) => (
        <Attachment key={i}>
          <AttachmentMedia variant="icon">
            <ImageIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>topomap_{i}.png</AttachmentTitle>
            <AttachmentDescription>240 KB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  ),
};
