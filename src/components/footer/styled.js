import styled from "styled-components";

export const Container = styled.footer`
  font-family: "Poppins";
  background-color: #000;
  padding: 20px 60px 15px;
  svg:hover {
    transition: all .2s ease-in;
    fill: #fff;
  }
  @media (max-width: 480px) {
    padding: 30px 20px 15px;
  }
`;
export const Content = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  max-width: 200px;
  margin: auto;
  border-radius: 10px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
`;
export const Copyright = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dc0000;
  p {
    font-size: 14px;
  }
  a {
    color: #dc0000;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    p{
      margin: 10px 0;
    }
  } 
  @media (max-width: 584px) {
    p{
      text-align: center;
      font-size: 12px;
    }
  }
`;
