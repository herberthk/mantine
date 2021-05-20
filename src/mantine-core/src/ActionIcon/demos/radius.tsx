import React from 'react';
import { ActionIcon, Group, SIZES } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';
import { ImageIcon } from '@modulz/radix-icons';

const getSizes = (props: any) =>
  SIZES.map((size) => (
    <ActionIcon key={size} size="xl" variant="filled" radius={size} {...props}>
      <ImageIcon style={{ width: 28, height: 28 }} />
    </ActionIcon>
  ));

export function ActionIconRadiusDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getSizes({ color: 'blue' })}</Group>
    </CodeDemo>
  );
}
