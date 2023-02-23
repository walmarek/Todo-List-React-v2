import Container from "../../common/Container";
import Title from "../../common/Title";
import Wrapper from "../../common/Wrapper";


const AuthorPage = () => {
  return (
    <Container>
      <Title title="About author" />
      <Wrapper title="Marek Wal" body={<>nana nana nana na</>} />
    </Container>
  );
};

export default AuthorPage;
