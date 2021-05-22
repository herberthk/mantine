import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';
import { CodeDemo } from '@mantine/docs';

const code = `import React from 'react';
import { Avatar, Group } from '@mantine/core';
import image from './image.png';

function Demo() {
  return (
    <Group position="center">
      <Avatar
        src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
        alt="it's me"
      />
      <Avatar radius="xl" color="lime" />
      <Avatar color="red">VR</Avatar>
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <Avatar color="blue" radius="xl">
        <StarIcon style={{ width: 24, height: 24 }} />
      </Avatar>
    </Group>
  );
}`;

export function AvatarRootDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
        <Avatar radius="xl" color="lime" />
        <Avatar color="red">VR</Avatar>
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
        <Avatar color="blue" radius="xl">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </Group>
    </CodeDemo>
  );
}
