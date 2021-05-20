import React from 'react';
import { ActionIcon, Group, SIZES } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';
import { ImageIcon } from '@modulz/radix-icons';

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 20,
  lg: 26,
  xl: 34,
};

const getSizes = (props: any) =>
  SIZES.map((size) => (
    <ActionIcon key={size} size={size} {...props}>
      <ImageIcon style={{ width: iconSizes[size], height: iconSizes[size] }} />
    </ActionIcon>
  ));

export function ActionIconSizesDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getSizes({ variant: 'filled', color: 'blue' })}</Group>
    </CodeDemo>
  );
}
