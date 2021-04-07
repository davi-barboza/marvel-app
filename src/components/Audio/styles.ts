import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 30px;
  bottom: 50px;

  display: flex;
  justify-content: center;

  input{
    position: absolute;
    bottom: 38px;
    width: 100px;
    right: -53px;

    transform: rotate(-90deg);
    cursor: pointer;
  }

  audio{
    z-index: 100;
  }

  img {
    position: absolute;
    bottom: -25px;
    left: -5px;

    width: 17px;
    cursor: pointer;
  }
`;