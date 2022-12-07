import "./style.css";

const Section = ({ title, body, buttons }) => (
  <section className="section">
    <div className="section__list">
      <h2 className="section__header--list">{title}</h2>
      {buttons}
    </div>
    {body}
  </section>
);

export default Section;
