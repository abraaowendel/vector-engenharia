import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  min-height: calc(100vh - 107px);
  background-color: #fff;
  font-family: "Poppins", "Ubuntu", "Arial";
`;
export const Section = styled.section`
  display: flex;
  min-height: calc(100vh - 107px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 60px 60px;
  @media (max-width: 979px) {
    padding: 120px 30px 0;
  }
  @media (max-width: 480px) {
    padding: 120px 20px 0;
    text-align: center;
  }
`;
