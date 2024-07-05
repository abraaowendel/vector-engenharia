import { useState } from "react";
import * as C from "./styled";

export const FormularioContato = () => {
  
  const [formulario, setFormulario] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    contato: "",
    tipoProjeto: "",
    descricaoProjeto: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formulario.nome ||
      !formulario.sobrenome ||
      !formulario.email ||
      !formulario.contato ||
      !formulario.tipoProjeto ||
      !formulario.descricaoProjeto
    ) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    setFormulario({
      nome: "",
      sobrenome: "",
      email: "",
      contato: "",
      tipoProjeto: "",
      descricaoProjeto: "",
    });

    openWhatsappWeb();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevState) => ({ ...prevState, [name]: value }));
  };

  const openWhatsappWeb = () => {
    const url = `https://api.whatsapp.com/send?phone=5582982026496&text=%20Ol%C3%A1,%20eu%20sou%20${
      formulario.nome + " "
    }%20${
      formulario.sobrenome
    }!%20%0A%20%20%20%20%0A%20%20%20%20**Tipo%20de%20Projeto:**%20${
      formulario.tipoProjeto
    }%0A%20%20%20%20**Descri%C3%A7%C3%A3o%20do%20Projeto:**%20${
      formulario.descricaoProjeto
    }%0A%20%20%20%20%0A%20%20%20%20**Contato:**%0A%20%20%20%20*%20E-mail:%20${
      formulario.email
    }%0A%20%20%20%20*%20WhatsApp:%20${
      formulario.contato
    }%0A%20%20%20%20%0A%20%20%20%20Aguardo%20seu%20retorno!%20`;
    window.open(url, "_blank");
  };

  return (
    <C.FormContainer>
      <form onSubmit={handleSubmit}>
        <C.FormTitle>SOLICITE SEU PROJETO</C.FormTitle>
        <C.FormGroup>
          <C.FormInput
            type="text"
            id="nome"
            name="nome"
            value={formulario.nome}
            onChange={handleChange}
            required
            placeholder="Nome"
          />
          <C.FormInput
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={formulario.sobrenome}
            onChange={handleChange}
            required
            placeholder="Sobrenome"
            style={{ marginLeft: "10px" }}
          />
        </C.FormGroup>

        <C.FormGroup>
          <C.FormInput
            type="email"
            id="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            placeholder=" E-mail"
          />
        </C.FormGroup>

        <C.FormGroup>
          <C.FormInput
            type="tel"
            id="contato"
            name="contato"
            value={formulario.contato}
            onChange={handleChange}
            required
            placeholder="WhatsApp"
          />
        </C.FormGroup>

        <C.FormGroup>
          <C.FormInput
            type="text"
            id="tipoProjeto"
            name="tipoProjeto"
            value={formulario.tipoProjeto}
            onChange={handleChange}
            required
            placeholder="Tipo de Projeto desejado, ex: Casa Térrea, Sobrado, Quitinete, etc"
          />
        </C.FormGroup>

        <C.FormGroup>
          <C.FormTextarea
            id="descricaoProjeto"
            name="descricaoProjeto"
            value={formulario.descricaoProjeto}
            onChange={handleChange}
            required
            placeholder="Descreva como deseja seu projeto"
          />
        </C.FormGroup>

        <C.SubmitButton type="submit" className="form-button">
          SOLICITAR PROJETO
        </C.SubmitButton>
      </form>
    </C.FormContainer>
  );
};

export default FormularioContato;
