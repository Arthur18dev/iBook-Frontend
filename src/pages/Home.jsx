import React from 'react';
import Header from '../components/Header';
import ListagemLivros from '../components/ListagemLivros';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { Link } from 'react-router-dom';



function Home() {
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
    <div className='destaque'>
    <h2>Destaque</h2>
    </div>
    <div id='interface'>
    <ListagemLivros/>
    <Rodape/>
    </div>
    </>
  );
}

export default Home; 