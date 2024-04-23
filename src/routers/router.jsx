import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SobreNos from "../pages/SobreNos";
import Contato from "../pages/Contato";
import Lancamentos from "../pages/Lancamentos";
import PreVenda from "../pages/PreVenda";
import CadastreSe from "../pages/CadastreSe";



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
        path: "/fantasia"
    },
    {
        path: "/terror",
    },
    {
        path: "/auto-ajuda",
    },
    {
        path: "/mangas",
    },
    {
        path: "/ficcao-cientifica",
    },
    {
        path: "/misterio",
    },
    {
        path: "/literatura",
    },
    {
        path: "/romance",
    },
    {
        path: "/infantil",
    },
])

export default router;