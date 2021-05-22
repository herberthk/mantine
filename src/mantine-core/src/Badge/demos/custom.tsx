import React from 'react';
import { Badge, Group } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const customComponentCode = `import React from 'react';
import { Badge, Group } from '@mantine/core';

const CustomComponent = ({ pads, children, ...others }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);


function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://mantine.dev" variant="outline">
        Link badge
      </Badge>
      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}`;

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

export function BadgeCustomComponentDemo() {
  return (
    <CodeDemo code={customComponentCode} language="tsx">
      <Group position="center">
        <Badge variant="outline" component="a" href="https://mantine.dev">
          Link badge
        </Badge>
        <Badge component={CustomComponent} pads="$$$" variant="filled">
          Get lots of money
        </Badge>
      </Group>
    </CodeDemo>
  );
}
