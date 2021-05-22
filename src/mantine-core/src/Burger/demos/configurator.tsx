import React, { useState } from 'react';
import { Burger, Group } from '@mantine/core';
import { Configurator } from '@mantine/docs';

function BurgerWrapper(props: React.ComponentPropsWithoutRef<typeof Burger>) {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Open navigation' : 'Close navigation';

  return (
    <Group position="center">
      <Burger
        title={title}
        aria-label={title}
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        {...props}
      />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Burger${props} />`;

export function BurgerConfigurator() {
  return (
    <Configurator
      component={BurgerWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
      ]}
    />
  );
}
