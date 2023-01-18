import { Section, Header, Title } from "./styled";

const Wrapper = ({ title, body, buttons }) => (
  <Section>
    <Header>
      <Title className="section__header--list">{title}</Title>
      {buttons}
    </Header>
    {body}
  </Section>
);

export default Wrapper;
