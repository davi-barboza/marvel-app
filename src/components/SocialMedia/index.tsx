import React from 'react';
import { Container } from './styles';
import githubIcon from '../../assets/githubIcon.png';
import linkedinIcon from '../../assets/linkedinIcon.png';
import marvelIcon from '../../assets/marvelIcon.png';

const SocialMedia: React.FC = () => {
  return (
    <Container>
      <span>
        <a href="#"><img src={githubIcon} alt="GitHub"/></a>
        <a href="#"><img src={linkedinIcon} alt="Linkedin"/></a>
        <a href="#"><img src={marvelIcon} alt="Marvel"/></a>
      </span>
    </Container>
  );
}

export default SocialMedia;