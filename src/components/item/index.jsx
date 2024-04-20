import * as C from "./styled";

export const Item = ({props}) => {
    return(
        <C.Area>
            <img src={props.img}/>
            <h4>{props.titulo}</h4>
            <p>{props.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <span>em 10x de {(props.valor / 10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} sem juros</span>
            <a href={props.url} target="_blank">Saiba mais</a>
        </C.Area>
    );
}