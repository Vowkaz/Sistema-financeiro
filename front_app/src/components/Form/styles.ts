import styled from "styled-components";

export const Container = styled.div`
  background-color: #2c2c2c;
  max-width: 70rem;
  margin: 1.25rem auto;
  width: 98%;
  box-shadow: 0 0 0.31rem #1e1e1e;
  border-radius: 0.31rem;
  display: flex;
  justify-content: space-around;
  padding: 0.93rem 0;
  gap: 0.625rem;
  
  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  background-color: #2c2c2c;
  border-radius: 0.31rem;
  padding: 0.31rem 0.625rem;
  font-size: 15px;
  border: 1px solid #121214;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  
  input {
    margin-left: 1.25rem;
    margin-right: 5px;
    accent-color: #121213;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 0.31rem 0.625rem;
  border: none;
  border-radius: 0.31rem;
  cursor: pointer;
  color: #fff;
  background-color: teal;
`;