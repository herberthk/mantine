import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      marginTop: theme.spacing.xl * 2,
      paddingTop: theme.spacing.md,
      borderTop: `1px dashed ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },

    links: {
      marginTop: theme.spacing.xs,
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginLeft: -theme.spacing.xs,
      marginRight: -theme.spacing.xs,
    },

    link: {
      ...getFocusStyles(theme),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      margin: theme.spacing.xs,

      '&:hover': {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      },
    },

    linkLabel: {
      marginLeft: theme.spacing.xs,
    },
  }),
  { theming }
);
