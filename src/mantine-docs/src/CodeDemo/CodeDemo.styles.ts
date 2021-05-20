import { MantineTheme, createMemoStyles } from '@mantine/core';

interface CodeDemoStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  demo: ({ theme }: CodeDemoStyles) => ({
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    position: 'relative',

    '&:not(:only-child)': {
      borderBottom: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }),

  code: ({ theme }: CodeDemoStyles) => ({
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginTop: 0,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
  }),

  controls: ({ theme }: CodeDemoStyles) => ({
    position: 'absolute',
    bottom: theme.spacing.xs - 1,
    right: theme.spacing.xs - 1,
  }),

  withToggle: {
    paddingRight: 50,
    minHeight: 80,
  },
});
