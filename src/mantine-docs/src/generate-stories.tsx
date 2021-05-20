import React from 'react';
import { storiesOf } from '@storybook/react';
import { upperFirst } from '@mantine/core';

interface Demos {
  __name: string;
  [key: string]: any;
}

export function generateStories(demos: Demos) {
  const stories = storiesOf(demos.__name, module);
  Object.keys(demos)
    .filter((key) => key !== '__name')
    .forEach((story) => {
      stories.add(upperFirst(story), () => {
        const Story = demos[story];
        return <Story />;
      });
    });
}
