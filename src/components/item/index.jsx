import { Link } from "react-router-dom";
import * as C from "./styled";

export const Item = ({props}) => {
    return(
        <C.Area>
            <div className="photo">
                <img src={props.src} aria-description={`Imagem de uma ${props.titulo}`}/>
            </div>
            <p>{props.titulo}</p>
            <h4>{props.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
            <span>em 10x de {(props.valor / 10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} sem juros</span>
            <Link to={`/produtos/${props.id}`} className="button">Saiba mais</Link>
        </C.Area>
    );
}