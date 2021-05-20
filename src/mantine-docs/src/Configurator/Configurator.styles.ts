import { MantineTheme, createMemoStyles } from '@mantine/core';

interface ConfiguratorStyles {
  theme: MantineTheme;
}

const BREAKPOINT = 885;

export default createMemoStyles({
  configurator: ({ theme }: ConfiguratorStyles) => ({
    display: 'flex',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
    overflow: 'hidden',
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,
    borderBottom: 0,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      flexDirection: 'column',
    },
  }),

  noCode: ({ theme }: ConfiguratorStyles) => ({
    borderRadius: theme.radius.sm,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
  }),

  preview: ({ theme }: ConfiguratorStyles) => ({
    flex: 1,
    padding: theme.spacing.md,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),

  controls: ({ theme }: ConfiguratorStyles) => ({
    boxSizing: 'border-box',
    width: 250,
    padding: theme.spacing.md,
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      width: '100%',
      borderLeft: 0,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
    },
  }),

  code: ({ theme }: ConfiguratorStyles) => ({
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginTop: 0,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
  }),
});
