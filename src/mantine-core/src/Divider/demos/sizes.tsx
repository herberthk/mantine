import React from 'react';
import { Divider } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const sizesCode = `import React from 'react';
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}`;

export function DividerSizesDemo() {
  return (
    <CodeDemo code={sizesCode} language="tsx">
      <Divider size="xs" />
      <Divider size="sm" style={{ marginTop: 10 }} />
      <Divider size="md" style={{ marginTop: 10 }} />
      <Divider size="lg" style={{ marginTop: 10 }} />
      <Divider size="xl" style={{ marginTop: 10 }} />
      <Divider size={10} style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}
