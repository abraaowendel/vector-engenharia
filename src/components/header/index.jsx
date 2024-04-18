import * as C from "./styled";
import Logo from "../../assets/images/logo.png";
import IconWhatsApp from "../../assets/icons/icon-whatsapp.svg";

export const Header = () => {
  const useNavigate = navigator();
  return (
    <C.Header>
      <C.Logo src={Logo} alt="" />
      <C.btnMenu>
          <div></div>
          <div></div>
          <div></div>
        </C.btnMenu>
      <C.Nav>
       
        <C.Ul>
          {/* COLOCAR LINK AO INVÉS DE <a/> */}
          <a href="#home">HOME</a>
          <a href="#sobre">SOBRE</a>
          <a href="#solicitar">SOLICITE SEU PROJETO PERSONALIZADO</a>
          <a href="#projetos">PROJETOS PRONTOS</a>
          <a href="https://api.whatsapp.com/send?phone=5582981820315">
            <img src={IconWhatsApp} alt="" />
          </a>
        </C.Ul>
      </C.Nav>
    </C.Header>
  );
};
