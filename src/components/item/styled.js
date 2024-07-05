import styled from "styled-components";

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", "Ubuntu", "Arial";
  min-width: 200px;
  max-width: 300px;
  h4 {
    font-weight: 100;
    margin-top: 10px;
    min-height: 50px;
  }
  p {
    font-size: 20px;
  }
  span {
    color: #DC0000;
  }

  p,
  span,
  h4 {
    padding: 0 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 100%;
  }
  img {
    min-height: 200px;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid #ccc;
  }
  a {
    min-width: 180px;
    text-align: center;
    padding: 10px;
    margin: 15px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #DC0000;
    color: #fff;
    &:hover {
      background-color: #8b0000;
    }
  }
  @media (max-width: 1060px) {
    max-width: 400px;
    img{
      min-height: 250px;
    }
  }
  @media (max-width: 979px) {
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    padding: 10px 0px;
    img{
      min-height: auto;
    }
  }  
  @media (max-width: 480px) {
    h4{
        font-size: 16px;
    }
    p{
      font-size: 16px;
    }
    span{
        font-size: 14px;
    }
    a {
        min-width: 150px;
        font-size: 14px;
        margin: 10px auto;
    }
    img{
      max-width: 100%;
      min-height: auto;
    }
  }
`;
