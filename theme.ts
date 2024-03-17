'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  components: {
    Title: {
      defaultProps: {
        styles: {
          root: {
            borderBottom: '1px solid var(--mantine-color-default-border)',
            marginBottom: rem(15),
          },
        },
      },
    },
  },
});
