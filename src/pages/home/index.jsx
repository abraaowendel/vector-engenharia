import * as C from "./styled";
import background from "../../assets/images/background.png";

export const Home = () => {
  return (
    <C.Container>
      <main>
        <C.SectionHome
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-Repeat",
            backgroundPosition: "center",
            width: "100vw",
            minHeight: "calc(100vh - 110px)",
          }}
          id="home"
        >
          <h1></h1>
        </C.SectionHome>
        <C.SectionAbout id="sobre">
          <h2>Sobre</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet. Sed odit iste aut adipisci voluptate
              sit voluptatem eius non voluptas rerum. Aut incidunt facere et
              earum omnis eos dolorum dolor et omnis vitae. Sit adipisci
              internos eum internos fuga aut ipsa eligendi in velit molestias
              qui quisquam molestiae et molestias amet ab sunt nisi. Non sunt
              necessitatibus et voluptatem facere est quasi soluta cum incidunt
              molestias ut maiores blanditiis aut assumenda dolorem est quod
              distinctio. Et quod ipsam ad dicta quae a autem nulla et nihil
              error est corporis galisum ut praesentium dolor. Et deleniti
              dolorum ea maiores minus vel nostrum praesentium sed quia officiis
              ut harum similique eum corrupti molestias est cupiditate
              consequatur? In molestiae temporibus id aspernatur sint a rerum
              galisum aut rerum neque aut sint maxime id error dolore. Qui
              reiciendis galisum quo exercitationem corporis quo officia
              mollitia est dolorem quos ex Quis dolorem est ducimus recusandae.
              A quia voluptatem et ducimus quia in nobis consequatur id odit
              illum eos necessitatibus ullam. Ex culpa debitis et ducimus
              explicabo ea provident possimus est architecto reiciendis eos
              galisum aspernatur. Et cumque quod qui aliquam harum in rerum
              assumenda et asperiores velit et blanditiis reiciendis? Eum
              quibusdam adipisci sit veritatis similique est pariatur velit sit
              praesentium totam. Rem similique necessitatibus est voluptatibus
              provident aut facilis rerum sit possimus tenetur et dolorem
              laudantium qui tempora Quis sit magnam ipsum. Ab sunt consequatur
              est unde nemo ea illum nulla in excepturi aspernatur!{" "}
            </p>
            <p>
              Ab velit esse sit quaerat alias et eaque eligendi eum Quis
              incidunt et corporis ducimus. Ex esse eligendi qui placeat
              consequatur non adipisci earum et consectetur laborum est sunt
              quibusdam hic debitis distinctio. Ut voluptatem voluptate id nisi
              asperiores qui repudiandae ullam eos quas mollitia et quae
              laudantium. Ea dolores quam id animi ducimus qui dicta dolor ut
              quibusdam debitis ab incidunt soluta. Sit aperiam quisquam aut
              quia voluptate et dignissimos aliquid cum fugiat ratione est
              consectetur ipsum eum ipsum possimus? Et inventore veritatis et
              consequuntur consectetur et vero Quis qui eligendi eveniet ut
              maiores voluptatibus. Est nulla accusamus non ducimus recusandae
              et quas enim 33 fugiat fugiat aut quibusdam deleniti vel voluptate
              mollitia. Et aperiam culpa et eligendi voluptatem ea ducimus ullam
              est quia beatae.{" "}
            </p>
          </div>
        </C.SectionAbout>
        <C.SectionProjects id="projetos">
          <h2>Projetos Prontos</h2>
          <C.Items>
            <C.Item>
              <div id="img"></div>
              <div id="desc">
                <p>Descrição aqui</p>
                <span>em 10x de R$ 32,00 sem juros</span>
              </div>
              <div id="btn">
                <button>Saiba mais</button>
              </div>
            </C.Item>
            <C.Item>
              <div id="img"></div>
              <div id="desc">
                <p>Descrição aqui</p>
                <span>em 10x de R$ 32,00 sem juros</span>
              </div>
              <div id="btn">
                <button>Saiba mais</button>
              </div>
            </C.Item>
            <C.Item>
              <div id="img"></div>
              <div id="desc">
                <p>Descrição aqui</p>
                <span>em 10x de R$ 32,00 sem juros</span>
              </div>
              <div id="btn">
                <button>Saiba mais</button>
              </div>
            </C.Item>
            <C.Item>
              <div id="img"></div>
              <div id="desc">
                <p>Descrição aqui</p>
                <span>em 10x de R$ 32,00 sem juros</span>
              </div>
              <div id="btn">
                <button>Saiba mais</button>
              </div>
            </C.Item>
            <C.Item>
              <div id="img"></div>
              <div id="desc">
                <p>Descrição aqui</p>
                <span>em 10x de R$ 32,00 sem juros</span>
              </div>
              <div id="btn">
                <button>Saiba mais</button>
              </div>
            </C.Item>
            <C.Item>
              <div id="img"></div>
              <div id="desc">
                <p>Descrição aqui</p>
                <span>em 10x de R$ 32,00 sem juros</span>
              </div>
              <div id="btn">
                <button>Saiba mais</button>
              </div>
            </C.Item>
          </C.Items>
        </C.SectionProjects>
        <C.SectionRequest id="solicitar">
          <h2>Solicite seu projeto</h2>
          <a href="https://api.whatsapp.com/send?phone=5582981820315">Entrar em contato</a>
        </C.SectionRequest>
      </main>
    </C.Container>
  );
};
