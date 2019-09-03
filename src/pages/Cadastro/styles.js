import styled from 'styled-components';

export const Container = styled.div`
    *{
      margin-top: 10px;
      color: #000;
    }
    div{
      text-align: center;
      font-size: 1.2em;
    }
    section{
      height: 410px;
      width: 350px;
      padding: 30px;
      background: rgba(255,255,255,0.6);
      border-radius: 20px;
      color: #FFFFFF;
    }
    input{
      height: 35px;
      width: 350px;
      background: #FFFFFF;
      border-radius: 10px; 
   }
   button{
      margin-left: 57px;
      width: 250px;
      height: 50px;
      background: #CC5200;
      border-radius: 50px;
      font-size: 1em;
      color: #FFFFFF; 
   }
   @media (max-width: 899px) {
    section{
    height: 350px;
    width: 350px;
    }
    input{
    margin-left: 15px;
    height: 35px;
    width: 300px;
    }
   }
`;
