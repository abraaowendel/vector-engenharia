import styled, { keyframes }from 'styled-components';

const piscar = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
`
export const Container = styled.div`
    min-height: calc(100vh - 60px);
    background-color: #111111;
    color: #fff;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    
    h1{
        animation: ${piscar} 1s linear  infinite;
    }
`