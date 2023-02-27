import Container from "../../common/Container";
import Title from "../../common/Title";
import Wrapper from "../../common/Wrapper";
import { GoBack } from "../tasks/GoBack";
import { Box } from "./styled";

const AuthorPage = () => {
  return (
    <Container>
      <Title title="About author" />
      <Wrapper
        title="Marek Wal"
        buttons={<GoBack />}
        body={
          <Box>
            Marek 36 years old, he is a father of two lovely children.
            <br />
            <br />
            In 2006 he moved to London and lived there 13 years. For the past 16
            years he has been managing restaurants kitchens in London and food
            stores in Poland. A year ago he decided to change industry and
            started to develop skills in IT as a Frontend Developer, this always
            was his interest and in this direction he wants to grow his career.{" "}
            <br />
            <br />
            His hobbies are music, running, gym, woodworking and gardening,
            especially aquascape lifestyle and definitely the most important for
            him in live is being a father and enjoying time with my family.
          </Box>
        }
      />
    </Container>
  );
};

export default AuthorPage;
