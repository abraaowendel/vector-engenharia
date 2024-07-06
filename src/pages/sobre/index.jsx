import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as C from "./styled";

export const Sobre = () => {
  const navigate = useNavigate();
  return (
    <C.Container>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <C.Section>
          <h2>SOBRE</h2>
          <p>
            A Vector Engenharia destaca-se no segmento de projetos residenciais,
            comprometendo-se com a excelência e a qualidade final do produto a
            um preço acessível de mercado. Nosso objetivo é garantir a
            satisfação plena dos clientes, seguindo rigorosamente todas as
            normas técnicas e dedicando atenção detalhada em cada projeto. Dessa
            forma, proporcionamos a você, nosso cliente, um processo executivo
            simplificado, sem complicações ou dúvidas recorrentes na execução da
            obra. Entre em contato conosco para solicitar seu orçamento e
            descubra como podemos transformar suas ideias em realidade de forma
            eficiente e confiável!
          </p>
          <button
            className="button"
            onClick={() => navigate("/solicitar")}
            aria-label="Ir  para a seção Solicitar um projeto personalizado"
          >
            Entrar em contato
          </button>
        </C.Section>
      </motion.div>
    </C.Container>
  );
};
