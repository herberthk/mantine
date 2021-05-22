import React from 'react';
import { Code } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const colorCode = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}`;

export function CodeColorDemo() {
  return (
    <CodeDemo code={colorCode} language="tsx">
      <Code color="red">React.createElement()</Code>
      <br />
      <br />
      <Code color="teal">React.createElement()</Code>
      <br />
      <br />
      <Code color="blue">React.createElement()</Code>
    </CodeDemo>
  );
}
