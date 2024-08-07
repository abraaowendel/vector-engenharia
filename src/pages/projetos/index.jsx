import * as C from "./styled";
import { motion } from "framer-motion";
import { Item } from "../../components/item";
import {useState } from "react";
import json  from "../../api/projetos";

export const Projetos = () => {

    const [data, setData] = useState(json.object);

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
            {data && data.map((item, key) => <Item props={item} key={key} />)}
          </C.Items>
          </C.Section>
        </motion.div>
      </C.Container>
    );
  };
 