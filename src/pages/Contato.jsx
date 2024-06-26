import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { Link } from 'react-router-dom';
import '../styles/contato.css'
import '../styles/rodape.css'




function Contato() {
  return (<>
    <Header />
    <Navbar />
    {/* <div className='categorias'>
      <h5>Categorias</h5>
      <ul>
        <li><a><Link to="/fantasia">Fantasia</Link></a></li>
        <li><a><Link to="/terror">Terror</Link></a></li>
        <li><a><Link to="/auto-ajuda">Auto ajuda</Link></a></li>
        <li><a><Link to="/mangas">Mangás</Link></a></li>
        <li><a><Link to="/ficcao-cientifica">Ficção cientifica</Link></a></li>
        <li><a><Link to="/misterio">Mistério</Link></a></li>
        <li><a><Link to="/literatura">Literatura</Link></a></li>
        <li><a><Link to="/romance">Romance</Link></a></li>
        <li><a><Link to="/infantil">Infantil</Link></a></li>
      </ul>
    </div> */}
    <div className='contato'>
      <h1>Fale Conosco</h1>
      <p><strong>Telefone:</strong> (11) 97617-6877</p>
      <p><strong>Telefone:</strong> (98) 93545-6578</p>
      <p><strong>Telefone:</strong> (11) 91700-4194</p>
      <h3>Mande no Email</h3>
      <p><strong>Email: </strong>arthurguicampos@gmail.com</p>
      <p><strong>Email: </strong> gustavodias3011@gmail.com</p>
      <p><strong>Email: </strong>jeanp@gmail.com</p>
    </div>
    <Rodape />
  </>
  );
}

export default Contato;