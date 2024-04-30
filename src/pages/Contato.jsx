import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { Link } from 'react-router-dom';
import '../styles/contato.css'
import '../styles/rodape.css'



function Contato() {
  return ( <>
    <Header/>
    <Navbar/>
    <div className='categorias'>
            <h5>Categorias</h5>
                <ul>
            <li><Link to="/fantasia">Fantasia</Link></li>
            <li><Link to="/terror">Terror</Link></li>
            <li><Link to="/auto-ajuda">Auto ajuda</Link></li>
            <li><Link to="/mangas">Mangás</Link></li>
            <li><Link to="/ficcao-cientifica">Ficção cientifica</Link></li>
            <li><Link to="/misterio">Mistério</Link></li>
            <li><Link to="/literatura">Literatura</Link></li>
            <li><Link to="/romance">Romance</Link></li>
            <li><Link to="/infantil">Infantil</Link></li>
            </ul>
        </div>
        <div className='contato'>
          <h1>Fale Conosco</h1>
          <p><strong>Telefone:</strong> (11) 97617-6877</p>
          <p><strong>Telefone:</strong> (98) 93545-6578</p>
          <h3>Mande no Email</h3>
          <p><strong>Email: </strong>arthurguicampos@gmail.com</p>
          <p><strong>Email: </strong> gustavodias3011@gmail.com</p>
          <h3>Siga nossas redes sociais</h3>
          <h2>Envie uma mensagem:</h2>
                   
        </div>
        <Rodape/>
    </>
  );
}

export default Contato;