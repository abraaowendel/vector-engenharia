import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 70px);
  background-color: #111111;
  font-family: 'Poppins', 'Ubuntu', 'Arial';
`
export const Section = styled.section`
  max-width: 1140px;
  margin: auto;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  font-family: 'Poppins', 'Ubuntu', 'Arial';
  color: #fff;
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
      opacity:.8;
    }
  }
`;
