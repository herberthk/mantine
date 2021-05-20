import React from 'react';
import { ActionIcon, Group, COLORS } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';
import { ImageIcon } from '@modulz/radix-icons';

const getColors = (props: any) =>
  COLORS.map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <ImageIcon style={{ width: 16, height: 16 }} />
    </ActionIcon>
  ));

export function ActionIconColorsDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getColors({ variant: 'hover' })}</Group>
      <Group position="center">{getColors({ variant: 'light' })}</Group>
      <Group position="center">{getColors({ variant: 'filled' })}</Group>
      <Group position="center">{getColors({ variant: 'outline' })}</Group>
    </CodeDemo>
  );
}
