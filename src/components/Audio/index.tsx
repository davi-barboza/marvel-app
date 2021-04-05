import React, { useState } from 'react';
import { Container, VolumeBar } from './styles';
import audioIcon from '../../assets/audioIcon.png';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS


const Audio: React.FC = () => {
  function toogleMute() {

  }

  return (
    <Container>
      <button type="button" onClick={toogleMute}>
        <img src={audioIcon} alt="audioIcon" />
      </button>

      <VolumeBar>
        <span></span>
      </VolumeBar>

      <AudioPlayer
        autoPlay
        src="https://d1490khl9dq1ow.cloudfront.net/music/mp3preview/the-epic-contest_GJLArISu.mp3"
        onPlay={e => console.log("onPlay")}
        loop
      // other props here
      />

    </Container>
  );
}

export default Audio;