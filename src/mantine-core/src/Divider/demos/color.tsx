import React from 'react';
import { Divider } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const colorCode = `import React from 'react';
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider color="blue" />
      <Divider color="red" />
      <Divider color="green" />
    </>
  );
}`;

export function DividerColorDemo() {
  return (
    <CodeDemo code={colorCode} language="tsx">
      <Divider color="blue" />
      <Divider color="red" style={{ marginTop: 10 }} />
      <Divider color="green" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}
