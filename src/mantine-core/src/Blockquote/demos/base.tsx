import React from 'react';
import { Blockquote } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const code = `import React from 'react';
import { Blockquote } from '@mantine/core';

function Demo() {
  return (
    <Blockquote cite="– Forrest Gump">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}`;

export function BlockquoteBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <Blockquote cite="– Forrest Gump">
          Life is like an npm install – you never know what you gonna get.
        </Blockquote>
      </div>
    </CodeDemo>
  );
}
