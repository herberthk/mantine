import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';
import { CodeDemo } from '@mantine/docs';

const iconPlaceholderCode = `import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Group position="center">
      <Avatar color="pink">
        <StarIcon />
      </Avatar>
      <Avatar color="blue">
        <StarIcon />
      </Avatar>
      <Avatar color="red">
        <StarIcon />
      </Avatar>
    </Group>
  );
}`;

export function AvatarIconPlaceholderDemo() {
  return (
    <CodeDemo code={iconPlaceholderCode} language="tsx">
      <Group position="center">
        <Avatar color="pink">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="blue">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="red">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </Group>
    </CodeDemo>
  );
}
