import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as C from "./styled";

export const Sobre = () => {
  const navigate = useNavigate();
  return (
    <C.Container>
      <motion.div
        initial={{ opacity: .5, scale: .5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <C.Section>
          <h2>Sobre</h2>
          <p>
            A Vector Engenharia é uma empresa do segmento de projetos
            residências e industriais, onde visamos a qualidade final do produto
            com um preço acessível de mercado. Prezamos pela excelências em
            nossos projetos, seguindo todas as nomas técnicas e detalhando ao
            máximo nossos projetos para que você, nosso cliente, posso ter um
            processo executivo sem muitas complicações ou dúvidas recorrentes da
            mão de obra. Entre em contato conosco e realize seu orçamento!
          </p>
          <button onClick={() => navigate("/solicitar")} aria-label="Ir  para a seção Solicitar um projeto personalizado">
            Entrar em contato
          </button>
        </C.Section>
      </motion.div>
    </C.Container>
  );
};
