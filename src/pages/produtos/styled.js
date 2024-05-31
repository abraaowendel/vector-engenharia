import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  min-height: calc(100vh - 107px);
  background-color: #fff;
  font-family: "Poppins", "Ubuntu", "Arial";
  padding: 120px 60px 60px;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
`;
export const Sides = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    color: #023047;
  }
  h5{
    font-size: 18px;
    font-weight: normal;
    color: #668290;
  }
  h4 {
    margin-top: 10px;
    color: #000;
    font-size: 28px;
    letter-spacing: 1.2px;
    font-weight: normal;
  }
  div {
    display: flex;
    b {
      color: #999;
      margin-left: 5px;
      font-size: 14px;
    }
    input[type="radio"] {
      margin-right: 5px;
    }
  }
  span {
    font-size: 13px;
    color: #2980b9;
    margin-left: 5px;
  }
  p {
    color: #999;
    font-size: 13px;
  }
  a,
  button {
    background-color: #ff7f00;
    color: #fff;
    padding: 15px;
    margin: 15px 0;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    height: 50px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Line = styled.div`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #bbbbbb;
  border-radius: 3px;
  margin: 30px 0 15px;
`;
export const Box = styled.div`
  span {
    display: block;
    width: 100%;
    height: 5px;
    background-color: #000;
    margin: 10px 0;
    border-radius: 3px;
  }
`;
export const ImgPrincipal = styled.img`
  width: 100%;
  height: 300px;
  border: 1px solid #000;
`;
export const Miniaturas = styled.div`
  display: flex;
  img {
    min-width: 150px;
    height: 80px;
    border: 1px solid #000;
    cursor: pointer;
    transition: 0.3s all ease-in;
    &:hover {
      opacity: 1 !important;
    }
  }
`;
export const Info = styled.div`
`
export const Descricao = styled.div`
  p{
    color: #555;
  }
`
export const Titulo = styled.h2`
  font-size: 28px;
  font-weight: 100;
  letter-spacing: 1.25px;
  color: #555;
`
