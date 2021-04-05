import styled from 'styled-components';

export const Container = styled.div`

  border-radius: 4px;
  text-decoration: none;
  overflow: auto;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 110px;


  display: flex;
  justify-content: center;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

  h3 {
      font-size: 1.3rem;
  }
  img {
    margin: 10px 0;
    object-fit: contain;
  }
  p {
    font-size: ${props => props.theme.fontsize.description}
  }
  
`;
