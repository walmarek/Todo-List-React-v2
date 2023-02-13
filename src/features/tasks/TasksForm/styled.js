import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 140px;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
export const Button = styled.button`
  background-color: teal;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: 0.5s;

  &:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.1);
  }

  &:active {
    background-color: hsl(180, 100%, 45%);
  }
`;
export const Input = styled.input`
  border: 1px solid #eee;
  padding: 10px;
`;
