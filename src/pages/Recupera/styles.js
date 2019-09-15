import styled from 'styled-components';

export const Container = styled.div`
  *{
    margin-top: 10px;
   }
   div{
    text-align: center;
    font-size: 1.3em;
   }
   section{
    height: 200px;
    width: 350px;
    padding: 30px;
    background: rgba(255,255,255,0.6);
    border-radius: 20px;
    color: #000;
   }
   input{
    margin-top: 0;
    height: 35px;
    width: 350px;
    background: #FFFFFF;
    border-radius: 10px; 
   }
   button{
    margin-bottom: 10px;
    width: 350px;
    height: 50px;
    background: #CC5200;
    border-radius: 50px;
    font-size: 1em;
    color: #000; 
   }
   @media (max-width: 470px){
    section{
    height: 200px;
    width: 300px;
    padding: 30px;
    }  
   input{
    width: 300px;
   }
   button{
    width: 300px;
   }
  }
  @media (max-width: 375px){
    section{
    height: 200px;
    width: 200px;
    padding: 30px;
    }  
    input{
      width: 200px;
    }
   button{
     width: 200px;
    }
  }
`;
