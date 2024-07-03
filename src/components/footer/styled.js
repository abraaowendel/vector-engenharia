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
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    a{
      padding: 10px;
      &:hover {
        opacity: 0.5;
      }
    }
    svg {
    }
  }
  p {
    color: #DC0000;
    font-size: 13px;
  }
  @media (max-width: 480px) {
    padding: 15px 20px;
    p {
      text-align: center;
    }
  }
`;
export const Copyright = styled.div`
  display: flex;
  align-items: center;
  span{
    display: block;
    color: #DC0000;
    font-size: 12px;
    font-family: 'Poppins', 'Arial';
  }
  p{
    margin-right: 30px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    p{
      margin: 10px 0;
    }
  }
`