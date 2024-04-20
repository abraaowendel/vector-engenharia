import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 107px);
  font-family: 'Poppins', 'Ubuntu', 'Arial';
  padding: 120px 60px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 979px) {
    padding: 120px 30px 0;
    margin: 20px 0 0;
  }
  @media (max-width: 480px) {
    padding: 100px 20px 0;
  }
`
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2{
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
    font-size: 36px;
  }
  @media (max-width: 979px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    h2{
      margin: 10px 0 0;
      font-size: 30px;
    }
  }
`
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`