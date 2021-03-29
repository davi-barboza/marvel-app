import styled from 'styled-components';

export const Container = styled.div`

  h3 {
      font-size: 1.6rem;
  }
  img {
    width: 270px;
  }
  p {
    font-size: ${props => props.theme.fontsize.description}
  }
  
`;
