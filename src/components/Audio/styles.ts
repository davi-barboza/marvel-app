import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 30px;
  bottom: 50px;

  width: 3px;
  height: 100px;

  background: white;
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    bottom: -25px;
    left: -5px;

    width: 17px;
    cursor: pointer;
  }

 
`;

export const VolumeBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 6px;
  height: 50px;
  background: red;
  display: flex;
  justify-content: center;

  cursor: pointer;

  span {
    position: absolute;
    height: 4px;
    width: 12px;
    background: red;
  }

  audio{
    z-index: 100;
  }
`;
