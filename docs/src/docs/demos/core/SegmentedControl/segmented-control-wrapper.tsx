import React, { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

export function SegmentedControlWrapper(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof SegmentedControl>,
    'value' | 'onChange' | 'data'
  >
) {
  const [value, onChange] = useState<string>('react');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}
