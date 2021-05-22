import React from 'react';
import { Badge } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const fullWidth = `import React from 'react';
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>Full width badge</Badge>
      </div>

      <div style={{ width: 120 }}>
        <Badge variant="filled" fullWidth>Badge with overflow</Badge>
      </div>
    </>
  );
}`;

export function BadgeFullWidthDemo() {
  return (
    <CodeDemo code={fullWidth} language="tsx">
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </div>

      <div style={{ width: 130, marginTop: 20 }}>
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </div>
    </CodeDemo>
  );
}
