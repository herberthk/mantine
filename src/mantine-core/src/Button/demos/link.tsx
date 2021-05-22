import React from 'react';
import { Button, Group, COLORS } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const getThemes = (props?: any) =>
  COLORS.map((color) => (
    <Button key={color} color={color} {...props}>
      {color}
    </Button>
  ));

export function ButtonLinkVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes({ variant: 'link' })}</Group>
    </CodeDemo>
  );
}
