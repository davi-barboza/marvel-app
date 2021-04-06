import React, { useState } from 'react';
import { Container, VolumeBar } from './styles';
import audioIcon from '../../assets/audioIcon.png';

const Audio: React.FC = () => {
  function toogleMute() {

  }

  return (
    <Container>
      <button type="button" onClick={toogleMute}>
        <img src={audioIcon} alt="audioIcon" />
      </button>

      <VolumeBar type="range"/>

    </Container>
  );
}

export default Audio;