import React from 'react';
import { Badge, Group } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const code = `import React from 'react';
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Badge>Light</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="filled">Filled</Badge>
    </Group>
  );
}`;

export function BadgeBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Badge>Light</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="filled">Filled</Badge>
      </Group>
    </CodeDemo>
  );
}
