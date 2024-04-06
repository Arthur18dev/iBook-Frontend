import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (<>
        <div className="nav-bar">
            <nav id="menu">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre-nos">Sobre nós</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/lancamento">Lançamentos</Link></li>
                    <li><Link to="/pre-venda">Pré-venda</Link></li>
                    <li><Link to="/cadastre-se">Cadastre-se</Link></li>
                </ul>
            </nav>
            <div className='categorias'>
            <h5>Categorias</h5>
                <ul>
            <li></li>
            </ul>
        </div>
        </div>
    </>)
}
export default Navbar;