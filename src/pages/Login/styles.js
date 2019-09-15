import styled from 'styled-components';

export const Container = styled.div`
  *{
    margin-top: 5px;
  }
  div{
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 10px;
   }
  section{
    display: flex;
    flex-direction: column;
    height: 330px;
    width: 380px;
    padding: 30px; 
    color: #FFFFFF; 
    border-radius: 20px;
    background: linear-gradient(180deg, #B57C7C 0%, rgba(255, 255, 255, 0) 100%), #E65C00;
   }
   input{
    margin-bottom: 5px;
    margin-top: 0;
    height: 35px;
    width: 370px;
    background: #FFFFFF;
    border-radius: 10px; 
   }
   button{
    margin-top: 0;
    width: 370px;
    height: 50px;
    background: #CC5200;
    border-radius: 50px;
    font-size: 1em;
    color: #FFFFFF; 
   }
   .link1{
     text-align: right;
     margin-top: 0;
     margin-right: 7px;
   }
   a{
     text-align: center;
     color: #FFFFFF; 
   }
  @media (max-width: 600px) {
    section{
    height: 320px;
    width: 330px;
    }
    input{
    width: 320px;
    }
    button{
    width: 320px;
   }
  }
  @media (max-width: 400px) {
    section{
    width: 270px;
    }
    input{
    width: 260px;
    }
    button{
    width: 260px;
   }
  }
  @media (max-width: 330px) {
    section{
    height: 300px;
    width: 220px;
    }
    input{
    width: 220px;
    }
    button{
    width: 220px;
   }
  }
`;
