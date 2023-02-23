import { Section, Header, Title } from "./styled";

const Wrapper = ({ title, body, buttons }) => (
  <Section>
    <Header>
      <Title>{title}</Title>
      {buttons}
    </Header>
    {body}
  </Section>
);

export default Wrapper;
