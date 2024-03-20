import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

import AppShellClient from '@/components/AppShell';

export const metadata = {
  title: 'JenGermann.com',
  description: 'Home of Jen Germann, software developer and educator',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} withGlobalClasses>
          <AppShellClient>{children}</AppShellClient>
        </MantineProvider>
      </body>
    </html>
  );
}
