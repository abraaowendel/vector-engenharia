import { useParams } from "react-router-dom";
import { data } from "../../api/projetos.json";

import * as C from "./styled";
import { useEffect, useState } from "react";

export const Produtos = () => {

  const { id } = useParams();
  const produtoId = parseInt(id);
  const [item, setItem] = useState();

  useEffect(() => {
    trazerProduto()
  }, []);

  const trazerProduto = () => {
    const json = data.find(obj => {
      if(produtoId == obj.id){
        setItem(obj)
      }
    });
  }
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
                <input type="radio" id="huey" name="drone" value="huey" checked readOnly/>            
                <p>Projeto Arquitetônico</p>
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">COMPRAR AGORA</a>
            <button>MODIFICAR PROJETO</button>
            <div>Categoria {item.categoria}</div>
            <div>Etiqueta {item.etiqueta}</div>
          </C.RightSide>
        </C.Sides>  
      )}
    </C.Container>
  );
};
