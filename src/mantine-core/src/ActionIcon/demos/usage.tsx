import React from 'react';
import { useMantineTheme, PasswordInput } from '@mantine/core';
import { CodeDemo } from '@mantine/docs';

export function ActionIconUsageDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <PasswordInput
          placeholder="Password"
          hidePasswordLabel="Hide password"
          showPasswordLabel="Show password"
          variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
        />
      </div>
    </CodeDemo>
  );
}
