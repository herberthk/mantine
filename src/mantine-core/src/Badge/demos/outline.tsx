import React from 'react';
import { Badge, Group, COLORS } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const getThemes = (props?: any) =>
  COLORS.map((color) => (
    <Badge key={color} color={color} {...props}>
      {color}
    </Badge>
  ));

export function BadgeOutlineVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes({ variant: 'outline' })}</Group>
    </CodeDemo>
  );
}
