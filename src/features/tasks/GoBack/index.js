import { useHistory } from "react-router-dom";
import Button from "../Button";

export const GoBack = () => {
  const history = useHistory();

  return <Button onClick={() => history.goBack()}>🡸 Back</Button>;
};
