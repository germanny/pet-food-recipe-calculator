import { PropsWithChildren } from 'react';

export default function Home(props: PropsWithChildren) {
  const { children } = props;
  return (
    <h1>Home</h1>
  )
}
