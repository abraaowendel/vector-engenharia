import * as C from "./styled";
import iconAreaConstruida from "../../assets/icons/icon_area_construida.webp";
import iconMetragemTerreno from "../../assets/icons/icon_metragem_terreno.webp";
import iconLarguraFundo from "../../assets/icons/icon_largura_x_fundo.webp";
import iconBanheiro from "../../assets/icons/icon_banheiros.webp";
import iconQuartos from "../../assets/icons/icon_quartos.webp";
import iconSuites from "../../assets/icons/icon_suites.webp";
import iconPiscina from "../../assets/icons/icon_piscina.webp";
import iconGaragem from "../../assets/icons/icon-garagem.webp";

export const Tabela = ({ props }) => {
  return (
    <C.Table>
      <tbody>
        <tr>
          <td>
            <img src={iconAreaConstruida} alt="Icone de Area Construida" />
          </td>
          <td>Área</td>
          <td>{props.area}</td>
        </tr>
        <tr>
          <td>
            <img src={iconLarguraFundo} alt="Icone de Largura e Fundo" />
          </td>
          <td>Largura x Fundo (m)</td>
          <td>{props.largura}</td>
        </tr>
        <tr>
          <td>
            <img src={iconMetragemTerreno} alt="Icone de Metragem de Terreno" />
          </td>
          <td>Lote mínimo (m²)</td>
          <td>{props.loteMinimo}</td>
        </tr>
        <tr>
          <td>
            <img src={iconQuartos} alt="Icone de Quartos" />
          </td>
          <td>Quartos</td>
          <td>{props.quartos}</td>
        </tr>
        <tr>
          <td>
            <img src={iconSuites} alt="Icone de Suites" />
          </td>
          <td>Suíte</td>
          <td>{props.suites}</td>
        </tr>
        <tr>
          <td>
            <img src={iconBanheiro} alt="Icone de Banheiro" />
          </td>
          <td>Banheiros</td>
          <td>{props.banheiros}</td>
        </tr>
        <tr>
          <td>
            <img src={iconGaragem} alt="Icone de Garagem" />
          </td>
          <td>Vagas de Garagem</td>
          <td>{props.garagem}</td>
        </tr>
        <tr>
          <td>
            <img src={iconPiscina} alt="Icone de Piscina" />
          </td>
          <td>Piscina</td>
          <td>{props.piscina}</td>
        </tr>
      </tbody>
    </C.Table>
  );
};
