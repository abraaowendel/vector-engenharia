import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  to {
    transform: rotate(360deg)  
 }
`;
export const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #000;
  border-right-color: #dc0000;
  animation: ${rotate} 1s infinite linear;
`;
