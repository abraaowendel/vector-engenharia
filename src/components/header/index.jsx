import * as C from "./styled";
import Logo from "../../assets/images/logo.png";
import IconWhatsApp from "../../assets/icons/icon-whatsapp.svg";

export const Header = () => {
  return (
    <C.Header>
      <C.Logo src={Logo} alt="" />
      <C.Nav>
        <C.Ul>
          <a href="#home">HOME</a>
          <a href="#">SOBRE</a>
          <a href="#">SOLICITE SEU PROJETO PERSONALIZADO</a>
          <a href="#">PROJETOS PRONTOS</a>
          <a href="https://api.whatsapp.com/send?phone=5582981820315">
            <img src={IconWhatsApp} alt="" />
          </a>
        </C.Ul>
      </C.Nav>
    </C.Header>
  );
};
