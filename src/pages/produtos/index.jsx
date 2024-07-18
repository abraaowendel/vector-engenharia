import * as C from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabela } from "../../components/tabela";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import json from "../../api/projetos";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Loading } from "../../components/loading";

export const Produtos = () => {

  const { id } = useParams();
  const produtoId = parseInt(id);
  const [item, setItem] = useState(false);
  const [imagemPrincipal, setImagemPrincipal] = useState();
  const [carrousel, setCarrousel] = useState([]);
  let [defaultId, setDefaultId] = useState(0);

  useEffect(() => {
    trazerProduto();
  }, []);

  useEffect(() => {
    trocarImagemPrincipal();
  }, [defaultId]);

  const trazerProduto = () => {
    const object = json.object.find((obj) => {
      if (produtoId === obj.id) {
        setTimeout(() => {
          setItem(obj);
          setCarrousel(obj.srcMiniaturas);
          setImagemPrincipal(obj.srcMiniaturas[defaultId]);
        }, 100);
      }
    });
  };

  const trocarImagemPrincipal = () => {
    if (defaultId > 4) {
      setDefaultId(0);
    }
    if (defaultId < 0) {
      setDefaultId(4);
    }
    setImagemPrincipal(carrousel[defaultId]);
  };

  const handlePreviousImage = () => {
    if (defaultId === 0) {
      setDefaultId(carrousel.length - 1);
      return;
    } 
    setDefaultId(defaultId - 1);
  };

  const handleNextImage = () => {
    if (defaultId === carrousel.length - 1) {
      setDefaultId(0);
      return;
    }
    setDefaultId(defaultId + 1);
  };

  const handleMiniatureClick = (key) => {
    setDefaultId(key);
  };

  return (
    <C.Container>
      {!item && <Loading />}
      {item && (
        <>
          <C.Sides className="sides">
            <C.LeftSide>
              <C.Box>
                <Zoom alt={item.titulo}>
                  <div>
                    <C.ImgPrincipal src={imagemPrincipal} alt="" />
                    <div className="arrows">
                      <IoIosArrowBack
                        fontSize={40}
                        color="#c0c0c0"
                        className="arrow-left"
                        onClick={handlePreviousImage}
                      />
                      <IoIosArrowForward
                        fontSize={40}
                        color="#c0c0c0"
                        className="arrow-right"
                        onClick={handleNextImage}
                      />
                    </div>
                    <C.Miniaturas>
                      {item.srcMiniaturas.map((item, key) => (
                        <img
                          src={item}
                          key={key}
                          alt={`Miniatura ${key + 1}`}
                          onClick={() => handleMiniatureClick(key)}
                          style={{
                            opacity: defaultId === key ? 1 : 0.5,
                          }}
                        />
                      ))}
                    </C.Miniaturas>
                  </div>
                </Zoom>
              </C.Box>
            </C.LeftSide>
            <C.RightSide>
              <h1>{item.titulo}</h1>
              <h4>
                {item.valor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h4>
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
          <C.Info>
            <C.Titulo>INFORMAÇÕES GERAIS</C.Titulo>
            <Tabela props={item.info} />
          </C.Info>
          <C.Descricao>
            <C.Titulo>DESCRIÇÃO</C.Titulo>
            <p>{item.descricao}</p>
          </C.Descricao>
        </>
      )}
    </C.Container>
  );
};
