import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 107px);
  font-family: 'Poppins', 'Ubuntu', 'Arial';
  padding: 120px 60px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  @media (max-width: 979px) {
    padding: 120px 30px 0;
    margin: 20px 0;
  }
  @media (max-width: 480px) {
    padding: 100px 20px 30px;
  }
`
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2{
    text-align: center;
    color: #000;
    letter-spacing: 1.2px;
    margin: 40px 0 20px;
    font-weight: 700;
    font-size: 36px;
  }
  @media (max-width: 979px) {
    flex-direction: column;
    h2{    
      margin: 15px 0 0;
      font-size: 30px;
    }
  }
  @media (max-width: 480px) {
    h2{
      margin: 30px 0 0;
      font-size: 26px;
      line-height: 1.1;
    }
  }
`
export const Items = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`