'use client';

import { createTheme, rem } from '@mantine/core';

// Other possible colors
// https://colorkit.co/color/7d8ca3/

export const theme = createTheme({
  // https://coolors.co/palette/212738-f97068-d1d646-edf2ef-57c4e5
  colors: {
    'midnight-express': [
      // https://colorkit.co/color/212738/
      '#9ea1aa',
      '#878b96',
      '#717682',
      '#5c616f',
      '#474d5c',
      '#33394a',
      '#212738', // 6 - preferred
      '#1b202f',
      '#161a27',
      '#10141f',
    ],
    'flirty-salmon': [
      '#ffd6d1',
      '#ffc8c2',
      '#ffbab3',
      '#ffaca4',
      '#ff9e95',
      '#fe8f86',
      '#fc8077',
      '#f97068', // 7 - preferred
      '#d96059',
      '#b9514b',
    ],
    poison: [
      // https://colorkit.co/color/d1d646/
      '#dee389',
      '#dadf76',
      '#d5da60',
      '#d1d646', // 3 - preferred
      '#b5ba3c',
      '#9b9e32',
      '#818428',
      '#686a1e',
      '#505215',
      '#393b0d',
    ],
    beluga: [
      // https://colorkit.co/color/edf2ef/
      '#f8faf9',
      '#f4f7f5',
      '#f1f5f2',
      '#edf2ef', // 3 - preferred
      '#e2e6e3',
      '#d6dad8',
      '#cbcecc',
      '#c0c3c1',
      '#b5b7b6',
      '#aaacab',
      // '#9fa1a0',
      // '#959695',
    ],
    malibu: [
      // https://colorkit.co/color/57c4e5/
      '#d1eef8',
      '#c2e8f5',
      '#b2e2f3',
      '#a2dcf0',
      '#91d6ed',
      '#7fd0eb',
      '#6ccae8',
      '#57c4e5', // 7 - preferred
      '#4baac7',
      '#3e91aa',
    ],
  },
  black: '#212738',
  components: {
    Title: {
      defaultProps: {
        styles: {
          root: {
            // borderBottom: '1px solid var(--mantine-color-default-border)',
            marginBottom: rem(9),
          },
        },
      },
    },
  },
});
