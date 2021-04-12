import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import audioIcon from '../../assets/audioIcon.png';
import audioMuteIcon from '../../assets/audioMuteIcon.png';
import themeMain from "../../assets/audio/themeMain.mp3";


const Audio: React.FC = () => {
  const [volume, setVolume] = useState(undefined);
  const [muted, setMuted] = useState('block');
  const [notMuted, setNotMuted] = useState('none');

  useEffect(() => {
    const tagAudio = (document.querySelector('.tagAudio') as HTMLAudioElement);
    volume === undefined ? tagAudio.volume = 0.5 : tagAudio.volume = volume / 100;
  }, [volume])

  function toogleMute(isMuted: string) {
    const tagAudio = (document.querySelector('.tagAudio') as HTMLAudioElement);

    if (isMuted == "muted") {
      setMuted('none');
      setNotMuted('block');

      tagAudio.volume = 0.5;     
      tagAudio.muted = false;
      tagAudio.play();
      
    } else {
      setMuted('block');
      setNotMuted('none');

      tagAudio.muted = true;
    }
  }

  return (
    <Container>
      <button type="button">
        <img className="muted" src={audioMuteIcon} style={{display: `${muted}`}} alt="audioIcon" onClick={e => toogleMute('muted')}/>
        <img className="notMuted" src={audioIcon} style={{display: `${notMuted}`}} alt="audioIcon" onClick={e => toogleMute('notMuted')}/>
      </button>

      <audio className="tagAudio" src={themeMain} autoPlay loop />

      <input className="volume" type="range"  onMouseMove={e => setVolume(e.currentTarget.value)} />

    </Container>
  );
}

export default Audio;