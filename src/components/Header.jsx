import { useState } from 'react'; 
import logo from "../assets/imagem/Logotipo.png";
import '../styles/header.css';

function Header() {

    const [input, setInput] = useState('')

    function handleSearch(){
        
        if(input === ''){
            alert("Não deixe em branco")
            return;
        }
    }

    return (<>
    <div className="header">
          <img src={logo} alt="Error" />
          <h1>iBook</h1>
          <p>O amor pela leitura sempre com você!</p>
          <div className="containerInput">
            <input type="text" placeholder="Pesquise aqui" 
            value={input}
            onChange={(event) => setInput(event.target.value)}
            />
            <button className="buttonSearch" onClick={handleSearch}>
                <span>Pesquisar</span>
            </button>
          </div>
        </div>
    </>)
}


export default Header