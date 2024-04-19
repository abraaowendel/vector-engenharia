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
`;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: 20px;
  div {
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin: 50px 5px;
    cursor: pointer;
  }
`;
