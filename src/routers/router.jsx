import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SobreNos from "../pages/SobreNos";
import Contato from "../pages/Contato";
import Lancamentos from "../pages/Lancamentos";
import PreVenda from "../pages/PreVenda";
import CadastreSe from "../pages/CadastreSe";



import Registrar from "../pages/Registrar";
import EsqueceuSenha from "../pages/EsqueceuSenha";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/sobre-nos",
        element: <SobreNos />,
    },
    {
        path: "/contato",
        element: <Contato />,
    },
    {
        path: "/lancamento",
        element: <Lancamentos />,
    },
    {
        path: "/pre-venda",
        element: <PreVenda />,
    },
    {
        path: "/login",
        element: <CadastreSe />,
    },
    {
        path: "/registrar-se",
        element: <Registrar />,
    },
    {
        path: "/esqueceu-a-senha",
        element: <EsqueceuSenha />,
    }
])

export default router;