import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  min-height: calc(100vh - 107px);
  background-color: #fff;
  font-family: "Poppins", "Ubuntu", "Arial";
  padding: 120px 60px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 60px 30px 30px;
  }
`;
export const Sides = styled.div`
  margin-top: 45px;
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    color: #023047;
    font-weight: 100;
  }
  h5 {
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
    background-color: #DC0000;
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
  @media (max-width: 985px) {
    h1 {
      font-size: 25px;
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 14px;
    }
    p,
    span {
      font-size: 10px;
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
  @media (max-width: 985px) {
    margin: 15px 0 7.5px;
  }
`;
export const ImgPrincipal = styled.img`
  position: relative;
  max-width: 500px;
  height: 260px;
  width: 100%;
  border: 1px solid #000;
  object-fit: cover;
  @media (max-width: 985px) {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;
export const Box = styled.div`
  .arrows{
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    .arrow-left{
      position: absolute;
      top: 50%;
      left: 25px;
      &:hover{
        opacity: .5;
      }
    }
    .arrow-right{
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 20px;
      &:hover{
        opacity: .5;
      }
    }
    .arrow-left, 
    .arrow-right{
      z-index: 3;
      cursor: pointer;
    }
  }
  span {
    display: block;
    width: 100%;
    height: 5px;
    background-color: #000;
    margin: 10px 0;
    border-radius: 3px;
  }
  @media (max-width: 460px) {
    .arrow-left, 
    .arrow-right{
      font-size: 30px;
    }
  }
`;

export const Miniaturas = styled.div`
  user-select:none;
  display: flex;
  max-width: 500px;
  img {
    min-width: 120px;
    height: 80px;
    border: 1px solid #000;
    cursor: pointer;
    object-fit: cover;
    transition: 0.3s all ease-in;
    &:hover {
      opacity: 1 !important;
    }
  }
  @media (max-width: 985px) {
    max-width: 400px;
    img {
      min-width: 100px;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    min-width: 100%;
  }
  @media (max-width: 460px) {
    img {
      min-width: 50px;
      height: auto;
    }
  }
`;
export const Info = styled.div`
  margin: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 40px 0;
  }
`;
export const Descricao = styled.div`
  padding-bottom: 40px;
  p {
    color: #555;
  }
  @media (max-width: 480px) {
    p {
      font-size: 14px;
    }
  }
`;
export const Titulo = styled.h2`
  font-size: 28px;
  font-weight: 100;
  letter-spacing: 1.25px;
  color: #555;
  margin-bottom: 10px;
  display: block;
`;
