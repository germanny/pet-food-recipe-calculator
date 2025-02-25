'use client';

import { usePathname } from 'next/navigation';
import { NavLink, Stack, Tooltip, rem } from '@mantine/core';
import {
  IconHome2,
  // IconLogout,
  // IconSwitchHorizontal,
  IconDogBowl,
  IconId,
} from '@tabler/icons-react';

// interface NavbarLinkProps {
//   icon: typeof IconHome2;
//   label: string;
//   href: string;
//   active?: boolean;
// }

// function NavbarLink({ icon: Icon, label, href, active }: NavbarLinkProps) {
//   return (
//     <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
//       <NavLink
//         href={href}
//         leftSection={
//           <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
//         }
//         // className={classes.link}
//         active={active || undefined}
//       />
//     </Tooltip>
//   );
// }

const navLinks = [
  { icon: IconHome2, label: 'Home', href: '/' },
  {
    icon: IconDogBowl,
    label: 'Dog Food Recipe Calculator',
    href: '/dog-food-recipe-calculator',
  },
  {
    icon: IconId,
    label: 'Resume',
    href: '/resume',
  },
];

export default function NavbarMinimal() {
  const pathname = usePathname();

  const links = navLinks.map((item, index) => (
    <Tooltip
      key={`${item.label}-${index}`}
      label={item.label}
      position="right"
      transitionProps={{ duration: 0 }}
    >
      <NavLink
        href={item.href}
        active={pathname === item.href}
        label={item.label}
        leftSection={<item.icon size="1rem" stroke={1.5} />}
        color="malibu"
        variant="filled"
        styles={{
          root: {
            maxHeight: rem(50),
          },
          section: {
            paddingLeft: rem(5),
          },
        }}
      />
    </Tooltip>
  ));

  return (
    <nav>
      <div>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      {/* <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack> */}
    </nav>
  );
}
