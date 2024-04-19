import { Link } from "react-router-dom";
import * as C from "./styled";

export const NotFound = () => {
  return (
    <C.Container>
        <h1>404</h1>
        <p>Essa página não existe.</p>
        <C.StyledLinkLink to="/">Voltar a página HOME</C.StyledLinkLink>
    </C.Container>
  );
};
