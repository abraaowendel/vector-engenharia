import * as C from "./styled";
import Logo from "../../assets/images/logo.png";
import IconWhatsApp from "../../assets/icons/icon-whatsapp.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <C.Header
      style={{
        backgroundColor:
          location.pathname !== "/" || isScrolled ? "#000" : "transparent",
      }}
    >
      <C.Logo src={Logo} alt="Logo Vector Engenharia" />
      <C.btnMenu>
        <div></div>
        <div></div>
        <div></div>
      </C.btnMenu>
      <C.Nav>
        <C.Ul>
          <C.StyledLink
            to="/"
            style={{ color: location.pathname === "/" ? "#fff" : "#ccc" }}
            alt="ir para a seção home"
          >
            HOME
          </C.StyledLink>
          <C.StyledLink
            to="/sobre"
            style={{ color: location.pathname === "/sobre" ? "#fff" : "#ccc" }}
            alt="ir para a seção sobre"
          >
            SOBRE
          </C.StyledLink>
          <C.StyledLink
            to="/solicitar"
            style={{
              color: location.pathname === "/solicitar" ? "#fff" : "#ccc",
            }}
            alt="ir para a seção solicitar orçamento"
          >
            SOLICITE SEU PROJETO PERSONALIZADO
          </C.StyledLink>
          <C.StyledLink
            to="/projetos"
            style={{
              color: location.pathname === "/projetos" ? "#fff" : "#ccc",
            }}
            alt="ir para a seção projetos"
          >
            PROJETOS PRONTOS
          </C.StyledLink>

          {/*           https://api.whatsapp.com/send?phone=5582981820315*/}
          <a href="/teste">
            <img src={IconWhatsApp} alt="ir para o WhatsApp" />
          </a>
        </C.Ul>
      </C.Nav>
    </C.Header>
  );
};
