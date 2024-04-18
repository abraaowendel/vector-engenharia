import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Sobre } from "../pages/sobre";
import { Contato } from "../pages/contato";
import { Projetos } from "../pages/projetos";
import { NotFound } from "../pages/404";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/solicitar" element={<Contato/>} />
            <Route path="/projetos" element={<Projetos/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}
export default MainRoutes;