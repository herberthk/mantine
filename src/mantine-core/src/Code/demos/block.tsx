import React from 'react';
import { Code } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const code = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

const blockCode = `import React from 'react';
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`${code}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}`;

export function CodeBlockDemo() {
  return (
    <CodeDemo code={blockCode} language="tsx">
      <Code block>{code}</Code>
    </CodeDemo>
  );
}
