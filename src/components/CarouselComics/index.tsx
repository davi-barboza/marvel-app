import React from 'react';
import ComicCard from './ComicCard';
import { Container } from './styles';

interface Comics {
  comics: any;
}

const CarouselComics: React.FC<Comics> = (props) => {

  return (
    <Container {...props}>
      {props.comics.map((comic: any) => (
            <ComicCard key={comic.id}
              title={comic.title}
              thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension}
            />
          ))}
    </Container>

  );
}

export default CarouselComics;