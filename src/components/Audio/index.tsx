import React, { useState } from 'react';
import { Container, VolumeBar } from './styles';
import audioIcon from '../../assets/audioIcon.png';

const Audio: React.FC = () => {

  return (
    <Container>
      
      
      <img src={audioIcon} alt="audioIcon"/>
    
      <VolumeBar>
        <span></span>
      </VolumeBar>

    </Container>
  );
}

export default Audio;