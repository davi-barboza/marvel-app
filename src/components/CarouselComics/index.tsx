import React from 'react';
import ComicCard from './ComicCard';
import { Container } from './styles';

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

interface Comics {
  comics: any;
}

const CarouselComics: React.FC<Comics> = (props) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slidesPerView: 10,
    spacing: 5,
  })

  return (
    <Container {...props} ref={sliderRef} className="keen-slider">
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