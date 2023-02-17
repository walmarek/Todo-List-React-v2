import styled from "styled-components";

export const ListButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
margin: 4px;
padding: 4px;
  border: none;
  cursor: pointer;
  color: teal;
  transition: 0.5s;

  @media (max-width: 767px) {
    width: 100%;
    margin: 5px;
    background: transparent;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 45%);
  }

  &:disabled {
    color: #bbb;
    cursor: default;
  }
`;
