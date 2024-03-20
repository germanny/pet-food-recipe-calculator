import { Card, Container } from '@mantine/core';

export default function Aside(): JSX.Element {
  return (
    <Container mt="md" w="90%">
      <Card withBorder padding="lg" radius="md" mb="xl" mih="230px" w="100%">
        <h4 style={{ marginBottom: 0 }}>Jen Germann</h4>
        <p>github</p>
      </Card>
    </Container>
  );
}
