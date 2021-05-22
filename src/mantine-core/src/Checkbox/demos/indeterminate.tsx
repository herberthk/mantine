import React from 'react';
import { IndeterminateCheckbox } from '@mantine/demos';
import { useMantineTheme } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/IndeterminateCheckbox/IndeterminateCheckbox';

export function CheckboxIndeterminateDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/IndeterminateCheckbox/IndeterminateCheckbox.tsx"
    >
      <div style={{ maxWidth: 340, margin: 'auto' }}>
        <IndeterminateCheckbox />
      </div>
    </CodeDemo>
  );
}
