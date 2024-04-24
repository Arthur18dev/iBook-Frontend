import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SobreNos from "../pages/SobreNos";
import Contato from "../pages/Contato";
import Lancamentos from "../pages/Lancamentos";
import PreVenda from "../pages/PreVenda";
import CadastreSe from "../pages/CadastreSe";


import Fantasia from "../pages/Fantasia";
import Terror from "../pages/Terror";
import AutoAjuda from "../pages/AutoAjuda";
import Mangas from "../pages/Mangas";
import FiccaoCientifica from "../pages/FiccaoCientifica";
import Misterio from "../pages/Misterio";
import Literatura from "../pages/Literatura";
import Romance from "../pages/Romance";
import Infantil from "../pages/Infantil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/sobre-nos",
        element: <SobreNos/>,
    },
    {
        path: "/contato",
        element: <Contato/>,
    },
    {
        path: "/lancamento",
        element: <Lancamentos/>,
    },
    {
        path: "/pre-venda",
        element: <PreVenda/>,
    },
    {
        path: "/cadastre-se",
        element: <CadastreSe/>,
    },
    {
        path: "/fantasia",
        element: <Fantasia/>,
    },
    {
        path: "/terror",
        element: <Terror/>,
    },
    {
        path: "/auto-ajuda",
        element: <AutoAjuda/>,
    },
    {
        path: "/mangas",
        element: <Mangas/>,
    },
    {
        path: "/ficcao-cientifica",
        element: <FiccaoCientifica/>,
    },
    {
        path: "/misterio",
        element: <Misterio/>,
    },
    {
        path: "/literatura",
        element: <Literatura/>,
    },
    {
        path: "/romance",
        element: <Romance/>,
    },
    {
        path: "/infantil",
        element: <Infantil/>,
    },
])

export default router;