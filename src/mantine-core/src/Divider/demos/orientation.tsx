import React from 'react';
import { Divider, Badge } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const orientationCode = `import React from 'react';
import { Divider, Badge } from '@mantine/core';

function Demo() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Badge>Badge</Badge>
        <Divider orientation="vertical" />
        <Badge>Badge</Badge>
        <Divider orientation="vertical" />
        <Badge>Badge</Badge>
      </div>
    </>
  );
}`;

export function DividerOrientationDemo() {
  return (
    <CodeDemo code={orientationCode} language="tsx">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Badge>Badge</Badge>
        <Divider orientation="vertical" margins="md" />
        <Badge>Badge</Badge>
        <Divider orientation="vertical" margins="md" />
        <Badge>Badge</Badge>
      </div>
    </CodeDemo>
  );
}
