import * as C from "./styled";
import { SlSocialInstagram } from "react-icons/sl";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Powered from "../../assets/icons/powered.svg";

export const Footer = () => {
  return (
    <C.Container>
      <C.Content>

      <C.Social>
        <a href="https://www.instagram.com/vectorengenharia_/" target="_blank">
          <SlSocialInstagram fontSize={30} color="#DC0000" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5582981452716&text=Ol%C3%A1%2C%20desejo%20solicitar%20um%20projeto%20personalizado.%F0%9F%98%80"
          target="_blank"
        >
          <FaWhatsapp fontSize={30} color="#DC0000" />
        </a>
        <a href="mailto:abraao.dev@gmail.com" target="_blank">
          <SiGmail fontSize={30}
          color="#DC0000" />
        </a>
      </C.Social>
      <C.Copyright>
        <p>
          Copyright © {new Date().getFullYear()} Vector Engenharia. Todos os
          direitos reservados.
        </p>
        <a
          href="https://abraaowendel.github.io/portfolio/"
          target="_blank"
          alt="Ir para o desenvolvedor do site"
        >
          <p>Powered By</p>
          <img src={Powered} alt="Logo AW Systems" style={{margin: "-5px 0 0 5px "}}/>
        </a>
      </C.Copyright>
      </C.Content>
    </C.Container>
  );
};
