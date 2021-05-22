import React from 'react';
import { ColorSwatch, Group, useMantineTheme, COLORS } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const code = `import React from 'react';
import { ColorSwatch, Group, useMantineTheme, COLORS } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = COLORS.map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}`;

export function ColorSwatchBaseDemo() {
  const theme = useMantineTheme();
  const swatches = COLORS.map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center" spacing="xs">
        {swatches}
      </Group>
    </CodeDemo>
  );
}
