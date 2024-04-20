import styled from "styled-components";

export const Filtro = styled.div`
  -webkit-filter: blur(0) brightness(0.6);
  -moz-filter: blur(0) brightness(0.5);
  -ms-filter: blur(0) brightness(0.5);
  -o-filter: blur(0) brightness(0.5);
  filter: blur(0) brightness(0.7);
  border: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: calc(100vh - 60px);
  @media (max-width: 480px) {
    min-height: 90vh;
  }
`;

export const Container = styled.section`
  z-index: 2;
  width: 100vw;
  min-height: calc(110vh - 60px);
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: end;
  transition: all .8s ease-in;
  background-color: #000;
  @media (max-width: 480px) {
    min-height: 90vh;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: 20px;
  div {
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin: 0 5px 50px;
    cursor: pointer;
  }
`;
