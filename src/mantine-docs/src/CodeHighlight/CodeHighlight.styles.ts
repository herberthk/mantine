import { createMemoStyles, MantineTheme } from '@mantine/core';

interface CodeHighlightStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  wrapper: ({ theme }: CodeHighlightStyles) => ({
    position: 'relative',
    marginBottom: theme.spacing.xl,
  }),

  code: ({ theme }: CodeHighlightStyles) => ({
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: 'Menlo, Monaco, Lucida Console, monospace',
    lineHeight: 1.7,
    fontSize: 13,
    overflowX: 'auto',
    borderRadius: theme.radius.sm,
    padding: [theme.spacing.md, theme.spacing.lg],
  }),

  copy: ({ theme }: CodeHighlightStyles) => ({
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    zIndex: 2,
  }),
});
