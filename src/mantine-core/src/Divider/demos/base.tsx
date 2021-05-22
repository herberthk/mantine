import React from 'react';
import { Divider } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const code = `import React from 'react';
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider />
      <Divider variant="solid" />
      <Divider variant="dotted" />
    </>
  );
}`;

export function DividerBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Divider />
      <Divider variant="dashed" style={{ marginTop: 10 }} />
      <Divider variant="dotted" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}
