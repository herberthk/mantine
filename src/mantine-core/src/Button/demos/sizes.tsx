import React from 'react';
import { Button, Group, SIZES } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const getSizes = (props?: any) =>
  SIZES.map((size) => (
    <Button key={size} size={size} {...props}>
      {size} size
    </Button>
  ));

export function ButtonSizesDemo() {
  return (
    <CodeDemo>
      <Group>{getSizes()}</Group>
    </CodeDemo>
  );
}
