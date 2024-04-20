import * as C from "./styled";
import Logo from "../../assets/images/logo.png";
import IconWhatsApp from "../../assets/icons/icon-whatsapp.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { CgMenu } from "react-icons/cg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerClass = toogle ? "active" : "";

  return (
    <C.Header
      style={{
        backgroundColor:
          location.pathname !== "/" || isScrolled ? "#000" : "transparent",
      }}
    >
      <C.Logo src={Logo} alt="Logo Vector Engenharia" />

      <C.btnMenu onClick={() => setToogle(!toogle)}>
        {!toogle && <CgMenu color="#fff" fontSize={"35px"} />}
        {toogle && <GrClose color="#fff" fontSize={"35px"} />}
      </C.btnMenu>
      <C.Nav>
        <C.Ul className={containerClass}>
          <C.StyledLink
            to="/"
            style={{ color: location.pathname === "/" ? "#fff" : "#ccc" }}
            alt="ir para a seção home"
            onClick={() => setToogle(false)}
          >
            HOME
          </C.StyledLink>
          <C.StyledLink
            to="/sobre"
            style={{ color: location.pathname === "/sobre" ? "#fff" : "#ccc" }}
            alt="ir para a seção sobre"
            onClick={() => setToogle(false)}
          >
            SOBRE
          </C.StyledLink>
          <C.StyledLink
            to="/solicitar"
            style={{
              color: location.pathname === "/solicitar" ? "#fff" : "#ccc",
            }}
            alt="ir para a seção solicitar orçamento"
            onClick={() => setToogle(false)}
          >
            SOLICITE SEU PROJETO PERSONALIZADO
          </C.StyledLink>
          <C.StyledLink
            to="/projetos"
            style={{
              color: location.pathname === "/projetos" ? "#fff" : "#ccc",
            }}
            alt="ir para a seção projetos"
            onClick={() => setToogle(false)}
          >
            PROJETOS PRONTOS
          </C.StyledLink>
        </C.Ul>
      </C.Nav>
    </C.Header>
  );
};
