import Input from "../../Input";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

// eslint-disable-next-line
export default () => {
  // using hooks ...queryParameters
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  // code without hooks

  // const location = useLocation();
  // const history = useHistory();
  // const query = new URLSearchParams(location.search).get(searchQueryParamName);

  // const onInputChange = ({ target }) => {
  //   const searchParams = new URLSearchParams(location.search);
  //   if (target.value.trim() === "") {
  //     searchParams.delete(searchQueryParamName);
  //   } else {
  //     searchParams.set(searchQueryParamName, target.value);
  //   }

  //   history.push(`${location.pathname}?${searchParams.toString()}`);
  // };

  return (
    <Wrapper>
      <Input
        placeholder="Filter tasks"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
