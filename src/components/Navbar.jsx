import '../styles/navbar.css';
import { Link } from 'react-router-dom';
// import { CiShoppingBasket } from "react-icons/ci";


function Navbar({ onClick }) {
    return (<>
        <div className="nav-bar">
            <nav id="menu">
                <ul>
                    <li onClick={ onClick }><a><Link to="/">Início</Link></a></li>
                    <li><a><Link to="/sobre-nos">Sobre nós</Link></a></li>
                    <li><a><Link to="/contato">Contato</Link></a></li>
                    <li><a><Link to="/lancamento">Lançamentos</Link></a></li>
                    <li><a><Link to="/pre-venda">Pré-venda</Link></a></li>
                    <li><a><Link to="/login">Cadastre-se</Link></a></li>
                    {/* <i><Link to=""></Link><button><CiShoppingBasket /></button></i> */}
                </ul>
            </nav>
        </div>
    </>)
}
export default Navbar;