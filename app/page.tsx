import Link from 'next/link';
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  Text,
  Title,
  UnstyledButton,
  rem,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconDogBowl,
  IconHome2,
  IconId,
  IconMail,
} from '@tabler/icons-react';

const cardData = [
  {
    title: 'A ToDo App',
    description: 'Because the world needs another one of these.',
    link: '/',
    buttonLabel: 'ToDos',
    icon: IconHome2,
  },
  {
    title: 'Dog Food Recipe Calculator',
    description:
      'A Next.js app with API route to the USDA Food Database and a form to calculate the nutrients in your homemade dog food recipe.',
    link: '/dog-food-recipe-calculator',
    buttonLabel: 'Calculator',
    icon: IconDogBowl,
  },
  {
    title: 'Resume',
    description:
      'Looking for a fullstack engineer? Great! Check out my resume.',
    link: '/resume',
    buttonLabel: 'Resume',
    icon: IconId,
  },
  // {
  //   title: 'Fourth card',
  //   description: 'Fourth card description',
  //   link: '/',
  //   buttonLabel: 'Go Home',
  // },
];

export default function Home() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-midnight-express-filled) 0%, var(--mantine-color-malibu-filled) 75%, var(--mantine-color-malibu-filled) 100%)';

  const cards = cardData.map((card) => (
    <GridCol span={12 / cardData.length} key={card.title}>
      <Card
        // withBorder
        padding={0}
        radius="md"
        mb="xl"
        mih="280px"
        bg="transparent"
      >
        <UnstyledButton>
          <Box ml={5}>
            {card.icon && (
              <card.icon size={36} color="var(--mantine-color-poison-3)" />
            )}
            <Title order={4} mt="sm">
              {card.title}
            </Title>
            <Text>
              <small>{card.description}</small>
            </Text>
          </Box>
          <Button
            component={Link}
            href={card.link}
            rightSection="→"
            radius="xl"
            color="midnight-express"
            variant="light"
            mt="xs"
            // styles={{
            //   root: {
            //     marginTop: 'auto',
            //   },
            // }}
          >
            {card.buttonLabel}
          </Button>
        </UnstyledButton>
      </Card>
    </GridCol>
  ));
  return (
    <>
      <Container
        // bg="malibu"
        // p="lg"
        mb="xl"
        // c="white"
        // styles={{
        //   root: {
        //     borderRadius: rem(10),
        //   },
        // }}
      >
        <h1>Hi! I'm Jen.</h1>
        <Text>
          As a Full Stack JavaScript engineer, I can design and build beautiful,
          user-friendly web and application interfaces, dive into server-side
          scripting, databases, and server management, and write tests, set up
          monitoring, and troubleshoot the entire stack.
        </Text>
        <Text my="lg">
          I made a few things. Why don't you check them out while you're here?
        </Text>
        {/* <Title order={2}>The Hub</Title> */}
        <Grid>{cards}</Grid>
      </Container>
      <Container
        // bg="white"
        p="lg"
        mb="xl"
        // styles={{
        //   root: {
        //     border: '1px solid var(--mantine-color-gray-3)',
        //     borderRadius: rem(10),
        //   },
        // }}
      >
        <Group justify="center">
          <ActionIcon
            component={Link}
            href="https://github.com/germanny"
            color="midnight-express.1"
            variant="light"
            aria-label="GitHub"
            radius="xl"
            size="xl"
          >
            <IconBrandGithub />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="https://twitter.com/germanny"
            color="midnight-express.1"
            variant="light"
            aria-label="Twitter"
            radius="xl"
            size="xl"
          >
            <IconBrandTwitter />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="mailto:hello@jengermann.com"
            color="midnight-express.1"
            variant="light"
            aria-label="Email"
            radius="xl"
            size="xl"
          >
            <IconMail />
          </ActionIcon>
        </Group>
      </Container>
    </>
  );
}
