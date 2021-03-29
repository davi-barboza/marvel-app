import React from 'react';
import { Container } from './styles';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <Container>
      <nav>
        <Link href="/spiderMan">Spider-Man</Link>
        <Link href="/ironMan">Iron-Man</Link>
        <Link href="/hulk">Hulk</Link>
      </nav>
    </Container>
  );
}

export default NavBar;