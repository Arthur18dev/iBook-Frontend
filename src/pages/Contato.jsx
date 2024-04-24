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
          <p>(98)9 35456578</p>
          <h3>Mande no Email</h3>
          <p>arthurguicampos@gmail.com</p>
          <h3>Siga nossas redes sociais</h3>
        </div>
        <Rodape/>
    </>
  );
}

export default Contato;