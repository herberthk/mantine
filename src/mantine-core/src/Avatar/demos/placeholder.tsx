import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const placeholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar src={null} alt="no image here" color="green" />;
}`;

export function AvatarPlaceholderDemo() {
  return (
    <CodeDemo code={placeholderCode} language="tsx">
      <Group position="center">
        <Avatar src={null} alt="no image here" color="green" />
      </Group>
    </CodeDemo>
  );
}
