import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  justify-content: center;
  padding: 15px 60px;
  font-family: "Poppins";
  div {
    cursor: pointer;
    svg {
      margin: 10px 10px 10px;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  p {
    color: #fff;
    font-size: 13px;
  }
  @media (max-width: 480px) {
    padding: 15px 20px;
    p {
      text-align: center;
    }
  }
`;
