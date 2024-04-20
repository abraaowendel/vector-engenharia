import * as C from "./styled";
import { SlSocialInstagram } from "react-icons/sl";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
    return (
        <C.Container>
            <div>
                <a href="https://www.instagram.com/abraaowsv/">
                    <SlSocialInstagram fontSize={28} color="#fff"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5582982026496&text=Ol%C3%A1%2C%20desejo%20solicitar%20um%20projeto%20personalizado.%F0%9F%98%80">
                    <FaWhatsapp fontSize={30} color="#fff"/>
                </a>
                <a href="mailto:">
                    <SiGmail fontSize={28} color="#fff"/>
                </a>
            </div>
            <p>Copyright © {new Date().getFullYear()} Vector Engenharia. Todos os direitos reservados.</p>
        </C.Container>
    );
};