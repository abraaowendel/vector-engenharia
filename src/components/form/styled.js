import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 4px;
  select {
    text-align: start;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 979px) {
    padding: 0 30px;
    width: 100%;
    padding: 15px 5px;
    #sobrenome {
      margin: 15px 0 0 0 !important;
    }
  }
  @media (max-width: 480px) {
    padding: 0 5px 30px;
  }
`;
export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  text-transform: none;
  padding: 30px 0 15px;
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  @media (max-width: 979px) {
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const FormTextarea = styled.textarea`
  min-height: 100px;
  width: 100%;
  resize: none;
  padding: 15px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #ccc;
  @media (max-width: 480px) {
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #DC0000;
  color: #fff;
  padding: 15px 30px;
  border: none;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin: auto;
  &:hover {
    background-color: #8b0000; /* Green hover color */
  }
  @media (max-width: 979px) {
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
