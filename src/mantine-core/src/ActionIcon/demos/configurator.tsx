import React from 'react';
import { ActionIcon, Group } from '@mantine/core';
import { Configurator } from '@mantine/docs';
import { GearIcon } from '@modulz/radix-icons';

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 26,
  xl: 34,
};

function ActionIconWrapper(props: React.ComponentPropsWithoutRef<typeof ActionIcon>) {
  return (
    <Group position="center">
      <ActionIcon {...props}>
        <GearIcon style={{ width: iconSizes[props.size], height: iconSizes[props.size] }} />
      </ActionIcon>
    </Group>
  );
}

const codeTemplate = (props: string) => `<ActionIcon${props}>
  <GearIcon />
</ActionIcon>`;

export function ActionIconConfigurator() {
  return (
    <Configurator
      component={ActionIconWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        {
          name: 'variant',
          type: 'select',
          data: [
            { label: 'transparent', value: 'transparent' },
            { label: 'hover', value: 'hover' },
            { label: 'filled', value: 'filled' },
            { label: 'light', value: 'light' },
            { label: 'outline', value: 'outline' },
          ],
          initialValue: 'hover',
          defaultValue: 'hover',
        },
      ]}
    />
  );
}
