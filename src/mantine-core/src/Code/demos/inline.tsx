import React from 'react';
import { Code } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const code = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

export function CodeInlineDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Code>React.createElement()</Code>
    </CodeDemo>
  );
}
