import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import audioIcon from '../../assets/audioIcon.png';
import themeMain from "../../assets/audio/themeMain.mp3";

const Audio: React.FC = () => {
  const [volume, setVolume] = useState<number>();
  
  useEffect(() => {
    const tagAudio = document.querySelector('.tagAudio');
    volume === undefined ? tagAudio.volume = 0.5 : tagAudio.volume = volume / 100;
  }, [volume])

  return (
    <Container>
      <button type="button">
        <img src={audioIcon} alt="audioIcon" />
      </button>

      <audio className="tagAudio" src={themeMain} autoPlay loop/>
      <input className="volume" type="range" min="0" max="100" onMouseMove={e => setVolume(e.target.value)}/>

    </Container>
  );
}

export default Audio;