import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #111111;
  justify-content: space-between;
  padding: 30px 60px;
`;
export const btnMenu = styled.div`
position: absolute;
    right: 60px;
  display: none;
  flex-direction: column;
  @media (max-width: 1200px) {
    display: flex;
  }
  div {
    margin: 2px 0;
    width: 30px;
    height: 3px;
    border: 1px solid #fff;
    background-color: #fff;
  }
`;
export const Logo = styled.img`
  height: 50px;
`;
export const Ul = styled.ul`
  @media (max-width: 1200px) {
    display: none;
  }
  a {
    font-family: "Poppins", "Ubuntu";
    margin: 0 10px;
    color: #fff;
    font-size: 16px;
    img {
      margin-bottom: -10px;
    }
  }
  a:hover {
    opacity: 0.8;
  }
`;
export const Nav = styled.nav``;
