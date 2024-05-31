import * as C from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import json from "../../api/projetos";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const Produtos = () => {
  const { id } = useParams();
  const produtoId = parseInt(id);
  const [item, setItem] = useState();
  const [imagemPrincipal, setImagemPrincipal] = useState();

  useEffect(() => {
    trazerProduto();
  }, []);

  const trazerProduto = () => {
    const object = json.object.find((obj) => {
      if (produtoId == obj.id) {
        setItem(obj);
        setImagemPrincipal(obj.srcMiniaturas[0]);
      }
    });
  };
  const handleTrocarImagem = (src) => {
  ;
  };

  return (
    <C.Container>
      {item && (
        <C.Sides className="sides">
          <C.LeftSide>
            <C.Box>
              <Zoom alt={item.titulo}>
                <C.ImgPrincipal src={imagemPrincipal} alt="" />
              </Zoom>
              <C.Miniaturas>
                {item.srcMiniaturas.map((item, key) => (
                  <img
                    src={item}
                    key={key}
                    style={{ opacity: imagemPrincipal === item ? 1 : 0.5 }}
                    alt={`Miniatura + ${key}`}
                    onClick={() => setImagemPrincipal(item)}
                  />
                ))}
              </C.Miniaturas>
            </C.Box>
          </C.LeftSide>
          <C.RightSide>
            <h1>{item.titulo}</h1>
            <h4>{item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
            <C.Line></C.Line>
            <h5>Incluso</h5>
            <div>
              <input
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
                readOnly
              />
              <b>Projeto Arquitetônico</b>
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              COMPRAR AGORA
            </a>
            <p>
              Categoria<span>{item.categoria}</span>
            </p>
            <p>
              Etiqueta:<span>{item.etiqueta}</span>
            </p>
          </C.RightSide>
        </C.Sides>
      )}
      <C.Info>
          <C.Titulo>
              INFORMAÇÕES GERAIS
          </C.Titulo>
      </C.Info> 
      <C.Descricao>
          <C.Titulo>
            DESCRIÇÃO
          </C.Titulo>
          <p>A Casa Mileto traz uma planta extremamente compacta e funcional para você que gosta de praticidade e economia. As grandes aberturas estrategicamente posicionadas permitem que você desfrute do agradável sol da manhã enquanto descansa nos generosos quartos. A área íntima é bastante protegida da área social, garantindo muita privacidade e aconchego. Na área social, uma planta aberta integra estar, jantar e cozinha com churrasqueira, juntando toda a família nas melhores ocasiões!</p>
      </C.Descricao>
    </C.Container>
  );
};
