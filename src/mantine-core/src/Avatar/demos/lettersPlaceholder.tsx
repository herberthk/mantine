import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const lettersPlaceholderCode = `import React from 'react';
import { Avatar, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Avatar color="pink">MK</Avatar>
      <Avatar color="green">YT</Avatar>
      <Avatar color="indigo">VR</Avatar>
    </Group>
  );
}`;

export function AvatarLettersPlaceholderDemo() {
  return (
    <CodeDemo code={lettersPlaceholderCode} language="tsx">
      <Group position="center">
        <Avatar color="pink">MK</Avatar>
        <Avatar color="green">YT</Avatar>
        <Avatar color="indigo">VR</Avatar>
      </Group>
    </CodeDemo>
  );
}
