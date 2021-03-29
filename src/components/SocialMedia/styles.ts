import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 70px; 
    
    position: fixed;
    right: 0;

    background-color: #C0251D;
    display: flex;
    align-items: center;

    span {
      position: fixed;
      right: 0;
      width: 95px;
      height: 170px;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-around;

      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: #C0251D;
    }
    span::after{
      content: "";
      position: absolute;
      top: -5px;
      left: 5px;
      height: 10px;
      width: 30px;
      background-color: #C0251D;
      border-radius: 10px;

      transform: rotate(-25deg);
    }
    span::before{
      content: "";
      position: absolute;
      bottom: -5px;
      left: 5px;
      height: 10px;
      width: 30px;
      background-color: #C0251D;
      border-radius: 10px;

      transform: rotate(25deg);
    }
    span img{
      width: 35px;
      margin-right: 25px;
    }
`;
