import { Container } from './styles';
import { useEffect, useState } from 'react';
import marvel from '../../assets/marvel.png'

interface dataChar{
  charName: string;
  charDescription: string;
  handleSubmit: () => void;
  setCharName: any;
}

const ComicSearch: React.FC<dataChar> = (props) => { 

  return (
    <Container method="POST">
      <img src={marvel} alt="Marvel" />

      <input type="text" name="character" value={props.charName} onChange={e => props.setCharName(e.target.value)} placeholder="Character" />

      <button type="button" onClick={props.handleSubmit}>Continue</button>

      <div className="footer">
        <p>Choose your character and have fun!</p>
      </div>
    </Container>
  );
}

export default ComicSearch;