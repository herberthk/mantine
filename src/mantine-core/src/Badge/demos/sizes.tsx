import React from 'react';
import { Badge, Group, SIZES } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const getSizes = (props?: any) =>
  SIZES.map((size) => (
    <Badge key={size} size={size} {...props}>
      {size} size
    </Badge>
  ));

export function BadgeSizesDemo() {
  return (
    <CodeDemo>
      <Group>{getSizes()}</Group>
    </CodeDemo>
  );
}
