import React from 'react';
import { CodeDemo } from '@mantine/docs';
import { Group, ActionIcon } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';

const variantsCode = `<ActionIcon variant="transparent"><GearIcon /></ActionIcon>
<ActionIcon variant="hover"><ChatBubbleIcon /></ActionIcon>
<ActionIcon variant="filled" color="blue"><ActivityLogIcon /></ActionIcon>
<ActionIcon variant="light" color="pink"><ImageIcon /></ActionIcon>
<ActionIcon variant="outline" color="teal"><CheckIcon /></ActionIcon>`;

export function ActionIconVariantsDemo() {
  return (
    <CodeDemo code={variantsCode} language="tsx">
      <Group position="center">
        <ActionIcon variant="transparent">
          <GearIcon />
        </ActionIcon>
        <ActionIcon variant="hover">
          <GearIcon />
        </ActionIcon>
        <ActionIcon variant="filled" color="blue">
          <GearIcon />
        </ActionIcon>
        <ActionIcon variant="light" color="pink">
          <GearIcon />
        </ActionIcon>
        <ActionIcon variant="outline" color="teal">
          <GearIcon />
        </ActionIcon>
      </Group>
    </CodeDemo>
  );
}
