import React from 'react';
import { Badge, Button, ActionIcon, Group } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';
import { CodeDemo } from '@mantine/docs';

const composeCode = `import React from 'react';
import { Badge, Button, ActionIcon, Group } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Group position="center">
      <Badge variant="filled">badge 1</Badge>
      <Badge variant="filled">badge 2</Badge>
      <ActionIcon title="Setting">
        <GearIcon />
      </ActionIcon>
      <Button>Button</Button>
    </Group>
  );
}`;

export function BadgeComposeDemo() {
  return (
    <CodeDemo code={composeCode} language="tsx">
      <Group position="center">
        <Badge variant="filled">badge 1</Badge>
        <Badge variant="filled">badge 2</Badge>
        <ActionIcon title="Setting">
          <GearIcon />
        </ActionIcon>
        <Button>Button</Button>
      </Group>
    </CodeDemo>
  );
}
