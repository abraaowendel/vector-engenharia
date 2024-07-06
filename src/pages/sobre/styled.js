import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  font-family: "Poppins", "Ubuntu", "Arial";
  min-height: calc(100vh - 120.09px);
  padding: 150px 40px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 576px) {
    padding: 150px 20px 60px;
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    text-align: center;
    font-size: 34px;
    margin: 15px 0 5px;
  }
  p{  
    font-size: 18px;
    text-shadow: 0 0 1px #ccc;
  }
  .button {
    text-align: center;
    max-width: 200px;
    width: 100%;
    border-radius: 5px;
    margin: 20px auto 0;
    padding: 20px;
    background-color: #dc0000;
    color: #fff;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
      background-color: #8b0000;
    }
  }
  @media (max-width: 576px) {
    p{
      font-size: 16px;
    }
  }
  @media (min-width: 576px) {
    p{
      font-size: 16px;
    }
    h2{
      font-size: 30px;
    }
  }
`;
