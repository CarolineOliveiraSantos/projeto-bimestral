import styled from 'styled-components';

export const Container = styled.div`
  *{
    margin-top: 20px;
  }
  div{
    font-size: 1.2em;
   }
  section{
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    text-align: center;
    height: 450px;
    width: 380px;
    padding: 30px; 
    color: #FFFFFF; 
    border-radius: 20px;
    background: linear-gradient(180deg, #B57C7C 0%, rgba(255, 255, 255, 0) 100%), #E65C00;
   }
   input{
    height: 35px;
    width: 350px;
    background: #FFFFFF;
    border-radius: 10px; 
   }
   button{
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
    height: 35px;
    width: 300px;
    }
   }
`;
