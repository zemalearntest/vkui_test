import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ContentCard } from '../ContentCard/ContentCard';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const story: Meta<SimpleGridProps> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SimpleGridProps>;

export const Playground: Story = {
  args: {
    gap: 8,
  },
  render: (args) => (
    <SimpleGrid {...args}>
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <ContentCard
            key={index}
            subtitle="ALBUM"
            header="Halsey – Badlands"
            caption="Blue Vinyl · EU · 2015"
            text="Badlands is the story about dreams and cruel reality..."
          />
        );
      })}
    </SimpleGrid>
  ),
  decorators: [
    (Component) => (
      <div style={{ width: '80%', border: '1px dotted red' }}>
        <Component />
      </div>
    ),
  ],
};
