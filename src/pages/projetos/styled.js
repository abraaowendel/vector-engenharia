import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Poppins', 'Ubuntu', 'Arial';
  min-height: calc(100vh - 110.09px);
  padding: 150px 10px 70px;
  @media (max-width: 570px) {
    padding: 150px 10px 40px;
  }
`
export const Section = styled.section`
  margin: auto;
  h2{
    text-align: center;
    font-size: 26px;
    margin: 15px 0 30px;
  }
  @media (min-width: 576px) {
    max-width: 540px;
    h2{
      font-size: 30px;
    }
  }
  @media (min-width: 768px) {
    max-width: 720px;
    h2{
      font-size: 36px;
      margin-top: 30px;
    }
  }
  @media (min-width: 990px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  } 
`
export const Items = styled.div`
   flex-wrap: wrap;
   display: flex;
   @media (max-width: 576px) {
    justify-content: center;
  }
`