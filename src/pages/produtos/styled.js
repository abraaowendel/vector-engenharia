import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  min-height: calc(100vh - 107px);
  background-color: #fff;
  font-family: "Poppins", "Ubuntu", "Arial";
  padding: 120px 60px 60px;
`;
export const Sides = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    input[type=radio]{
      margin-right: 5px;
    }
  }
  span{
    display: block;
    width: 100%;
    height: 3px;
    background-color: #f0f0f0;
    border-radius: 3px;
    margin: 30px 0 15px;
  }
  a,button{
    background-color: #FF7F00;
    color: #fff;
    padding: 15px;
    margin: 15px 0 0;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    height: 50px;
    &:hover{
      opacity: .8;
    }
  }
`
export const Box = styled.div`
  span{
    display: block;
    width: 100%;
    height: 5px;
    background-color: #000;
    margin: 10px 0;
    border-radius: 3px;
  }
`
export const ImgPrincipal = styled.img`
  width: 100%;
  height: 300px;
  border: 1px solid #000;
`
export const Miniaturas = styled.div`
  display: flex;
  img{
    min-width: 150px;
    height: 80px;
    border: 1px solid #000;
    cursor: pointer;
    transition: .3s all ease-in;
    &:hover{
      opacity: .3;
    }
  }
`
