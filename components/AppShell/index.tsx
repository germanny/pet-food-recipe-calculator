'use client';

import { PropsWithChildren } from 'react';
import { AppShell, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Navigation from '@/components/Navigation';
import Aside from '@/components/Aside';

export default function AppShellClient(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      // aside={{
      //   width: 300,
      //   breakpoint: 'sm',
      //   collapsed: { mobile: !opened },
      // }}
      navbar={{
        width: 50,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar withBorder={false}>
        <Navigation />
      </AppShell.Navbar>

      {/* <AppShell.Aside withBorder={false} bg="transparent">
        <Aside />
      </AppShell.Aside> */}

      <AppShell.Main
        style={{
          background:
            'url(https://res.cloudinary.com/germanny/image/upload/f_auto,fl_lossy,q_auto/v1/site/bg-module.png) no-repeat center 0 / 730px;',
          backgroundColor: 'var(--mantine-color-beluga-1)',
        }}
      >
        <Container size="md">{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
