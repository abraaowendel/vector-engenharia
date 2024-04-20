import * as C from "./styled";
import { motion } from "framer-motion";
import { Item } from "../../components/item";

export const Projetos = () => {
  const json = [
    {
      titulo: "Projeto Pronto -  Casa 3 Quartos - 1 suite",
      valor: 300.0,
      src: "",
      url: "https://hotmart.com/pt-br",
    },
    {
      titulo: "Projeto Pronto -  Casa 4 Quartos - 2 Suite",
      valor: 400.0,
      src: "",
      url: "https://hotmart.com/pt-br",
    },
    {
      titulo: "Projeto Pronto -  Casa em L",
      valor: 400.0,
      src: "",
      url: "https://hotmart.com/pt-br",
    },
    {
      titulo: "Projeto Pronto -  Casa",
      valor: 500.0,
      src: "",
      url: "https://hotmart.com/pt-br",
    },
    {
      titulo: "Projeto Pronto -  Casa",
      valor: 600.0,
      src: "",
      url: "https://hotmart.com/pt-br",
    },
    {
      titulo: "Projeto Pronto -  Casa",
      valor: 800.0,
      src: "",
      url: "https://hotmart.com/pt-br",
    },
  ];

  return (
    <C.Container>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <C.Section>
          <h2>PROJETOS PRONTOS</h2>
          <C.Items>
            {json && json.map((item, key) => <Item props={item} key={key} />)}
          </C.Items>
        </C.Section>
      </motion.div>
    </C.Container>
  );
};
