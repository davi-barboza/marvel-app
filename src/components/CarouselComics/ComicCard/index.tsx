import React from 'react';
import { Container } from './styles';

interface Comics {
  title: string;
  thumbnail: string;
}

const ComicCard: React.FC<Comics> = (props) => {

  return (
    <Container {...props}>
        <img src={props.thumbnail} alt={props.title} />
    </Container>
  );
}

export default ComicCard;