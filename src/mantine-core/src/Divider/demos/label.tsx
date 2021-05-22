import React from 'react';
import { Divider } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { CodeDemo } from '@mantine/docs';

const subHeaderCode = `import React from 'react';
import { Divider } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <>
      <Divider label="Label on the left" />
      <Divider label="Label in the center" labelPosition="center" />
      <Divider label="Label on the right" labelPosition="right" />
      <Divider
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
            <span style={{ marginLeft: 5 }}>Search results</span>
          </>
        }
      />
      <Divider
        label="Link label"
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
    </>
  );
}`;

export function DividerLabelDemo({ toggle = false }: { toggle: boolean }) {
  return (
    <CodeDemo code={subHeaderCode} language="tsx" toggle={toggle}>
      <Divider label="Label on the left" />
      <Divider label="Label in the center" labelPosition="center" style={{ marginTop: 10 }} />
      <Divider label="Label on the right" labelPosition="right" style={{ marginTop: 10 }} />
      <Divider
        style={{ marginTop: 10 }}
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
            <span style={{ marginLeft: 5 }}>Search results</span>
          </>
        }
      />
      <Divider
        style={{ marginTop: 10 }}
        label="Link label"
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
    </CodeDemo>
  );
}
