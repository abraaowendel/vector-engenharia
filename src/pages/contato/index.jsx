import FormularioContato from "../../components/form";
import * as C from "./styled";
import { motion } from "framer-motion";

export const Contato = () => {
  return (
    <C.Container>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <C.Section>
          <FormularioContato/>
       {/*    <a
            href="https://api.whatsapp.com/send?phone=5582982026496&text=Ol%C3%A1%2C%20desejo%20solicitar%20um%20projeto%20personalizado.%F0%9F%98%80"
            target="_blank"
          >
            Solicitar Projeto
          </a> */}
        </C.Section>
      </motion.div>
    </C.Container>
  );
};
