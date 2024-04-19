import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  font-family: 'Arial', 'Ubuntu';
  min-height: calc(100vh - 60px);
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 150px;
  }
  p{
    font-size: 30px;
  }
`

export const StyledLinkLink = styled(Link)`
  color: #fff;
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  background-color: #D50000;
  &:hover{
    opacity: .8;
  }
`