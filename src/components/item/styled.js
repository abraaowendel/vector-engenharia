import styled from "styled-components";

export const Area = styled.div`
  flex: 33.3%; /* Consider adding flex-grow: 1 here (optional) */
  display: flex;
  flex-direction: column;
  font-family: "Poppins", "Ubuntu", "Arial";
  padding: 20px;
  h4 {
    font-weight: 100;
    margin-top: 10px;
    height: 100%;
  }
  p {
    font-size: 20px;
  }
  span {
    color: #32633d;
  }

  p,
  span,
  h4 {
    padding: 0 15px;
    text-align: center;
  }
  img {
    min-height: 300px;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid #000; /* REMOVER QUANDO COLOCAR IMAGEM */
  }
  a {
    min-width: 180px;
    text-align: center;
    padding: 10px;
    margin: 15px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #32633d;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 979px) {
    flex: 50%;
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    flex: 100%;
    padding: 10px 0px;
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
        font-size: 14px;
        margin: 10px auto;
    }
    img{
        min-height: 250px;
    }
  }
`;
