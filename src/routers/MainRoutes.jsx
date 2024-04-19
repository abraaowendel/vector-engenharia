import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { Home } from "../pages/home";
import { Sobre } from "../pages/sobre";
import { Contato } from "../pages/contato";
import { Projetos } from "../pages/projetos";
import EmDev from "../components/dev";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/solicitar" element={<EmDev/>} />
            <Route path="/projetos" element={<EmDev/>} />
          {/*   <Route path="/solicitar" element={<Contato/>} />
            <Route path="/projetos" element={<Projetos/>} /> */}
        </Routes>
    );
}
export default MainRoutes;