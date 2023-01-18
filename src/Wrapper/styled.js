import styled from "styled-components";

export const Section = styled.section`
  border: 1px solid #eee;
  background-color: #fff;
  box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.div`
  border-bottom: 1px solid #eee;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 0;
`;
