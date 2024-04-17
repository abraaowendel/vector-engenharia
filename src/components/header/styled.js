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
export const Logo = styled.img`
    height: 50px;
`
export const Ul = styled.ul`
    a{
        font-family: 'Poppins', 'Ubuntu';
        margin:0 10px;
        color: #fff;
        font-size: 16px;
        img{
            margin-bottom: -10px;
        }
    }
    a:hover{
        opacity: .8;
    }
`
export const Nav = styled.nav`

`