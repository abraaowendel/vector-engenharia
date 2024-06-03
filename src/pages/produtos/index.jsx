import * as C from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import iconAreaConstruida from "../../assets/icons/icon_area_construida.webp";
import iconMetragemTerreno from "../../assets/icons/icon_metragem_terreno.webp";
import iconLarguraFundo from "../../assets/icons/icon_largura_x_fundo.webp";
import iconBanheiro from "../../assets/icons/icon_banheiros.webp";
import iconQuartos from "../../assets/icons/icon_quartos.webp";
import iconSuites from "../../assets/icons/icon_suites.webp";
import iconChurrasqueira from "../../assets/icons/icon_churrasqueira.webp";
import iconPiscina from "../../assets/icons/icon_piscina.webp";
import iconEscritorio from "../../assets/icons/icon_escritorio.webp";
import iconGaragem from "../../assets/icons/icon_garagem.webp";

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
      )}
      <C.Info>
        <C.Titulo>INFORMAÇÕES GERAIS</C.Titulo>
        <C.Items>
          <tbody>
            <tr>
              <td>
                <img src={iconAreaConstruida} alt="" />
              </td>
              <td>Área</td>
              <td>138,45</td>
            </tr>
            <tr>
              <td>
                <img src={iconLarguraFundo} alt="" />
              </td>
              <td>Largura x Fundo (m)</td>
              <td>138,45</td>
            </tr>
            <tr>
              <td>
                <img src={iconMetragemTerreno} alt="" />
              </td>
              <td>Lote mínimo (m²)</td>
              <td>12 x 21</td>
            </tr>
            <tr>
              <td>
              <img src={iconQuartos} alt="" />
              </td>
              <td>Quartos</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
              <img src={iconSuites} alt="" />
              </td>
              <td>Suíte</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
              <img src={iconBanheiro} alt="" />
              </td>
              <td>Banheiros</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
              <img src={iconGaragem} alt="" />
              </td>
              <td>Vagas de Garagem</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
              <img src={iconChurrasqueira} alt="" />
              </td>
              <td>Churrasqueira</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>
              <img src={iconPiscina} alt="" />
              </td>
              <td>Piscina</td>
              <td>Não</td>
            </tr>
            
          </tbody>
        </C.Items>
      </C.Info>
      <C.Descricao>
        <C.Titulo>DESCRIÇÃO</C.Titulo>
        <p>
          A Casa Mileto traz uma planta extremamente compacta e funcional para
          você que gosta de praticidade e economia. As grandes aberturas
          estrategicamente posicionadas permitem que você desfrute do agradável
          sol da manhã enquanto descansa nos generosos quartos. A área íntima é
          bastante protegida da área social, garantindo muita privacidade e
          aconchego. Na área social, uma planta aberta integra estar, jantar e
          cozinha com churrasqueira, juntando toda a família nas melhores
          ocasiões!
        </p>
      </C.Descricao>
    </C.Container>
  );
};
