import React from 'react';
import { Blockquote } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const noIconCode = `import React from 'react';
import { Blockquote } from '@mantine/core';
import { LightningBoltIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Blockquote cite="– Dan Abramov, 2016" icon={null}>
      I have a Sublime Text license on another laptop
    </Blockquote>
  );
}`;

export function BlockquoteNoIconDemo() {
  return (
    <CodeDemo code={noIconCode} language="tsx">
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <Blockquote cite="– Dan Abramov, 2016" icon={null}>
          I have a Sublime Text license on another laptop
        </Blockquote>
      </div>
    </CodeDemo>
  );
}
