import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 630px;
  margin-bottom: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    width: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 40px;
  }

  h1 {
    font-size: 3.5rem;
    color: ${props => props.theme.colors.primary};

    margin-bottom: 40px;
  }
  h3 {
    font-size: 1.6rem;
    text-align: right;
    font-weight: 400;
    line-height: 140%;
  }
`;
