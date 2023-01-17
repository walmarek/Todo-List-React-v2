import { Section, Div, Title} from "./styled"

const Wrapper = ({ title, body, buttons }) => (
  <Section>
    <Div>
      <Title className="section__header--list">{title}</Title>
      {buttons}
    </Div>
    {body}
  </Section>
);

export default Wrapper;
