import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const ContentDone = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;
  color: white;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: green;
      transition: 0.5s;

      &:hover {
        background-color: hsl(120, 100%, 35%);
      }
      &:active {
        background-color: hsl(120, 100%, 45%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: rgb(218, 6, 6);
      transition: 0.5s;

      &:hover {
        background-color: hsl(0, 100%, 60%);
      }

      &:active {
        background-color: hsl(0, 100%, 70%);
      }
    `}
`;
