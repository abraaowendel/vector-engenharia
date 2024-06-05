//PROJETO 01
import imagemPrincipal1 from "../assets/images/teste1.webp";
import miniatura01 from "../assets/images/mini1.webp";
import miniatura02 from "../assets/images/mini2.webp";
import miniatura03 from "../assets/images/mini3.webp";
import miniatura04 from "../assets/images/mini4.webp";
/* // PROJETO 02
import imagemPrincipal2 from '../assets/images/teste1.png';
import miniatura01 from '../assets/images/mini1.png';
import miniatura02 from '../assets/images/mini2.png';
import miniatura03 from '../assets/images/mini3.png';
import miniatura04 from '../assets/images/mini4.png';
//PROJETO 03
import imagemPrincipal03 from '../assets/images/teste1.png';
import miniatura01 from '../assets/images/mini1.png';
import miniatura02 from '../assets/images/mini2.png';
import miniatura03 from '../assets/images/mini3.png';
import miniatura04 from '../assets/images/mini4.png';
//PROJETO 04
import imagemPrincipal04 from '../assets/images/teste1.png';
import miniatura01 from '../assets/images/mini1.png';
import miniatura02 from '../assets/images/mini2.png';
import miniatura03 from '../assets/images/mini3.png';
import miniatura04 from '../assets/images/mini4.png';
//PROJETO 05
import imagemPrincipal05 from '../assets/images/teste1.png';
import miniatura01 from '../assets/images/mini1.png';
import miniatura02 from '../assets/images/mini2.png';
import miniatura03 from '../assets/images/mini3.png';
import miniatura04 from '../assets/images/mini4.png';
//PROJETO 06
import imagemPrincipal06 from '../assets/images/teste1.png';
import miniatura01 from '../assets/images/mini1.png';
import miniatura02 from '../assets/images/mini2.png';
import miniatura03 from '../assets/images/mini3.png';
import miniatura04 from '../assets/images/mini4.png'; */

const json = {
  object: [
    {
      id: 1,
      titulo: "Projeto Pronto - Casa 3 Quartos - 1 suite",
      descricao:
        "Lorem ipsum dolor sit amet. Et sunt officia et nesciunt dolor id quisquam saepe. Ut consectetur dolorem quo vitae enim eos fugiat Quis aut voluptatum Quis est dolor tenetur aut necessitatibus repudiandae qui nihil architecto. Non officiis explicabo in quisquam deleniti sit error dolor qui internos quidem eum aliquid rerum est numquam eligendi. Et suscipit excepturi ut quod consequatur ut facere consequuntur.",
      valor: 300.0,
      src: imagemPrincipal1,
      srcMiniaturas: [miniatura01, miniatura02, miniatura03, miniatura04],
      categoria: "Residencial",
      info: {
        garagem: "",
        suite: "",
        banheiros: "",
        quartos: "",
      },
      etiqueta: `1 Garagem, 1 Suite, 2 banheiros, 2 quartos`,
      url: "https://hotmart.com/pt-br",
    },
    {
      id: 2,
      titulo: "Projeto Pronto - Casa 4 Quartos - 2 Suite",
      descricao:
        "Lorem ipsum dolor sit amet. Et sunt officia et nesciunt dolor id quisquam saepe. Ut consectetur dolorem quo vitae enim eos fugiat Quis aut voluptatum Quis est dolor tenetur aut necessitatibus repudiandae qui nihil architecto. Non officiis explicabo in quisquam deleniti sit error dolor qui internos quidem eum aliquid rerum est numquam eligendi. Et suscipit excepturi ut quod consequatur ut facere consequuntur.",
      valor: 400.0,
      src: imagemPrincipal1,
      srcMiniaturas: [miniatura01, miniatura02, miniatura03, miniatura04],
      categoria: "Residencial",
      info: {
        garagem: "",
        suite: "",
        banheiros: "",
        quartos: "",
      },
      etiqueta: `1 Garagem, 1 Suite, 2 banheiros, 2 quartos`,
      url: "https://hotmart.com/pt-br",
    },
    {
      id: 3,
      titulo: "Projeto Pronto - Casa em L",
      descricao:
        "Lorem ipsum dolor sit amet. Et sunt officia et nesciunt dolor id quisquam saepe. Ut consectetur dolorem quo vitae enim eos fugiat Quis aut voluptatum Quis est dolor tenetur aut necessitatibus repudiandae qui nihil architecto. Non officiis explicabo in quisquam deleniti sit error dolor qui internos quidem eum aliquid rerum est numquam eligendi. Et suscipit excepturi ut quod consequatur ut facere consequuntur.",
      valor: 400.0,
      src: imagemPrincipal1,
      srcMiniaturas: [miniatura01, miniatura02, miniatura03, miniatura04],
      categoria: "Residencial",
      info: {
        garagem: "",
        suite: "",
        banheiros: "",
        quartos: "",
      },
      etiqueta: `1 Garagem, 1 Suite, 2 banheiros, 2 quartos`,
      url: "https://hotmart.com/pt-br",
    },
    {
      id: 4,
      titulo: "Projeto Pronto - Casa",
      descricao:
        "Lorem ipsum dolor sit amet. Et sunt officia et nesciunt dolor id quisquam saepe. Ut consectetur dolorem quo vitae enim eos fugiat Quis aut voluptatum Quis est dolor tenetur aut necessitatibus repudiandae qui nihil architecto. Non officiis explicabo in quisquam deleniti sit error dolor qui internos quidem eum aliquid rerum est numquam eligendi. Et suscipit excepturi ut quod consequatur ut facere consequuntur.",
      valor: 500.0,
      src: imagemPrincipal1,
      srcMiniaturas: [miniatura01, miniatura02, miniatura03, miniatura04],
      categoria: "Residencial",
      info: {
        garagem: "",
        banheiros: "",
        quartos: "",
      },
      etiqueta: `1 Garagem, 1 Suite, 2 banheiros, 2 quartos`,
      url: "https://hotmart.com/pt-br",
    },
    {
      id: 5,
      titulo: "Projeto Pronto - Casa",
      descricao:
        "Lorem ipsum dolor sit amet. Et sunt officia et nesciunt dolor id quisquam saepe. Ut consectetur dolorem quo vitae enim eos fugiat Quis aut voluptatum Quis est dolor tenetur aut necessitatibus repudiandae qui nihil architecto. Non officiis explicabo in quisquam deleniti sit error dolor qui internos quidem eum aliquid rerum est numquam eligendi. Et suscipit excepturi ut quod consequatur ut facere consequuntur.",

      valor: 600.0,
      src: imagemPrincipal1,
      srcMiniaturas: [miniatura01, miniatura02, miniatura03, miniatura04],
      categoria: "Residencial",
      info: {
        garagem: "",
        suite: "",
        banheiros: "",
        quartos: "",
      },
      etiqueta: `1 Garagem, 1 Suite, 2 banheiros, 2 quartos`,
      url: "https://hotmart.com/pt-br",
    },
    {
      id: 6,
      titulo: "Projeto Pronto - Casa",
      descricao:
        "Lorem ipsum dolor sit amet. Et sunt officia et nesciunt dolor id quisquam saepe. Ut consectetur dolorem quo vitae enim eos fugiat Quis aut voluptatum Quis est dolor tenetur aut necessitatibus repudiandae qui nihil architecto. Non officiis explicabo in quisquam deleniti sit error dolor qui internos quidem eum aliquid rerum est numquam eligendi. Et suscipit excepturi ut quod consequatur ut facere consequuntur.",

      valor: 800.0,
      src: imagemPrincipal1,
      srcMiniaturas: [miniatura01, miniatura02, miniatura03, miniatura04],
      categoria: "",
      info: {
        garagem: "",
        suite: "",
        banheiros: "",
        quartos: "",
      },
      etiqueta: `1 Garagem, 1 Suite, 2 banheiros, 2 quartos`,
      url: "https://hotmart.com/pt-br",
    },
  ],
};

export default json;
