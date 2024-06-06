import { Link } from "react-router-dom";
import * as C from "./styled";

export const Item = ({props}) => {
    return(
        <C.Area>
            <img src={props.src} aria-description={`Imagem de uma ${props.titulo}`}/>
            <h4>{props.titulo}</h4>
            <p>{props.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <span>em 10x de {(props.valor / 10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} sem juros</span>
            <Link to={`/produtos/${props.id}`}>Saiba mais</Link>
        </C.Area>
    );
}