import React from 'react';
import { Checkbox } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <Checkbox
      key={size}
      size={size}
      defaultChecked
      style={{ marginTop: index === 0 ? 0 : 15 }}
      label={`${size} checkbox`}
      {...props}
    />
  ));

export function CheckboxSizesDemo() {
  return <CodeDemo>{getSizes()}</CodeDemo>;
}
