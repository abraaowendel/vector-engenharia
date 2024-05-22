import { useParams } from "react-router-dom";
import { data } from "../../api/projetos.json";

import * as C from "./styled";
import { useEffect, useState } from "react";

export const Produtos = () => {
  const id = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    let item = data.find((x) => (x.id = id));
    setItem(item);
  }, []);

  return (
    <C.Container>
      {item && (
        <C.Sides className="sides">
          <C.LeftSide>
            <C.Box>
              <C.ImgPrincipal src={item.src} alt=""/>
              <C.Miniaturas>
                <img src={item.srcMiniaturas[0]} alt="" />
                <img src={item.srcMiniaturas[1]} alt="" />
                <img src={item.srcMiniaturas[2]} alt="" />
                <img src={item.srcMiniaturas[3]} alt="" />
              </C.Miniaturas>
            </C.Box>
          </C.LeftSide>
          <C.RightSide>
            <h1>{item.titulo}</h1>
            <p>R$ {item.valor}</p>
            <span></span>
            <div>
                <input type="radio" id="huey" name="drone" value="huey" checked />            
                <p>Projeto Arquitetônico</p>
            </div>
            <button>COMPRAR AGORA</button>
            <button>MODIFIQUE SEU PROJETO</button>
          </C.RightSide>
        </C.Sides>
      )}
    </C.Container>
  );
};
