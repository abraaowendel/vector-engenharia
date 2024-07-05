import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  height: 110.1px;
  button {
    height: 100%;
    border: 0;
    background-color: transparent;
    margin: 0 10px;
  }
  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;
export const btnMenu = styled.div`
  position: absolute;
  right: 60px;
  display: none;
  flex-direction: column;
  z-index: 5;
  svg {
    display: block;
  }
  @media (max-width: 979px) {
    display: flex;
    transition: all .8s ease-in-out;
  }
  @media (max-width: 480px) {
    right: 20px;
    svg {
      font-size: 35px;
      margin-left: 10px;
    }
  }
`;
export const Logo = styled.img`
  z-index: 5;
  @media (max-width: 1130px) {
    width: 260px;
    height: auto;
  }
  @media (max-width: 979px) {
    width: 320px;
  }
  @media (max-width: 395px) {
    width: 215px;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 979px) {
    position: absolute;
    text-align: center;
    background-color: #000;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 0;
    transition: all 0.3s ease-in-out;
    left: -999px;
    top: 0;
    &.active {
      width: 100vw;
      left: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  user-select: none;
  font-family: "Poppins", "Ubuntu";
  margin: 0 10px;
  &:hover {
    color: #fff;
  }
  @media (max-width: 1230px) {
    font-size: 15px;
  }
  @media (max-width: 979px) {
    margin: 15px;
    font-size: 20px;
    width: 100%;
    padding: 10px;
  }
`;
