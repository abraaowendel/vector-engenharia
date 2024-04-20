import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 107px);
  background-color: #fff;
  font-family: 'Poppins', 'Ubuntu', 'Arial';
`
export const Section = styled.section`
  max-width: 1140px;
  min-height: calc(100vh - 107px);
  margin: auto;
  padding: 60px 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Poppins', 'Ubuntu', 'Arial';
  color: #000;
  h2{
    font-size: 36px;
  }
  p{
    font-size: 18px;
  }
  button{
    background-color: #FF0000;
    font-family: 'Poppins', 'Ubuntu', 'Arial';
    padding: 15px 20px;
    border-radius: 3px;
    color: #fff;
    border: 0;
    margin-top: 20px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
      background-color: #8b0000;
    }
  }
  @media (max-width: 480px) {
    padding: 60px 20px 0;
    h2{
      font-size: 30px;
    }
    p{
      font-size: 16px;
    }
    
  } 
  @media (max-width: 380px) {
    h2{
      font-size: 28px;
    }
    p{
      font-size: 14px;
    }
    
  }
`;
