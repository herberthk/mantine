import React from 'react';
import { Blockquote } from '@mantine/core';
import { LightningBoltIcon } from '@modulz/radix-icons';
import { CodeDemo } from '@mantine/docs';

const iconCode = `import React from 'react';
import { Blockquote } from '@mantine/core';
import { LightningBoltIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Blockquote
      cite="– Your poor i3 from 2012 struggling its best"
      icon={<LightningBoltIcon style={{ width: 18, height: 18 }} />}
    >
      webpack built 40a9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}`;

export function BlockquoteIconDemo() {
  return (
    <CodeDemo code={iconCode} language="tsx">
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <Blockquote
          cite="– Your poor i3 from 2012 struggling its best"
          icon={<LightningBoltIcon style={{ width: 18, height: 18 }} />}
        >
          webpack built 40a9bf3d1a0a0914ed84 in 28259ms
        </Blockquote>
      </div>
    </CodeDemo>
  );
}
