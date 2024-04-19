import { useNavigate } from "react-router-dom";
import * as C from "./styled";

export const Sobre = () => {
    const navigate = useNavigate();
  return (
    <C.Container>
      <C.Section>
        <h2>Sobre</h2>
        <p>
          A Vector Engenharia é uma empresa do segmento de projetos residências
          e industriais, onde visamos a qualidade final do produto com um preço
          acessível de mercado. Prezamos pela excelências em nossos projetos,
          seguindo todas as nomas técnicas e detalhando ao máximo nossos
          projetos para que você, nosso cliente, posso ter um processo executivo
          sem muitas complicações ou dúvidas recorrentes da mão de obra. Entre
          em contato conosco e realize seu orçamento!
        </p>
        <button onClick={() => navigate("/solicitar")}>Solicitar orçamento</button>
      </C.Section>
    </C.Container>
  );
};
