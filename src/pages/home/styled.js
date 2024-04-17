import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  font-family: "Poppins", "Ubuntu", sans-serif;
  h2 {
    text-align: center;
  }
  section {
    padding: 40px 60px;
  }
`;
export const SectionHome = styled.section``;

export const SectionAbout = styled.section`
  background-color: #151515;
  color: #fff;
  p {
    max-width: 1200px;
    margin: auto;
  }
`;
export const SectionProjects = styled.section``;
export const SectionRequest = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #151515;
  button {
    cursor: pointer;
    max-width: 200px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  button:hover {
    opacity: 0.8;
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.div`
   flex-basis: 33.33%;
   padding: 10px;
  #img {
    border: 1px solid #000;
    height: 250px;
    border-radius: 10px;
    background-color: #111111;
  }
  #desc {
    padding: 10px;
  }
  p {
    font-size: 18px;
  }
  span {
    display: block;
    color: #4a653c;
    margin-top: 5px;
  }
  #btn {
    display: flex;
    justify-content: center;
    margin: 0px 0 20px;
  }
  button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    border-color: #ccc;
    &:hover{
      opacity: .8;
   }
  }
  
`;
