import React from 'react';
import Header from '../components/Header';
import ListagemLivros from '../components/ListagemLivros';
import Navbar from '../components/Navbar';



function Home() {
  return ( <>
    <Header/>
    <Navbar/>
    <div className='categorias'>
            <h5>Categorias</h5>
                <ul>
            <li>Fantasia</li>
            <li>Terror</li>
            <li>Auto ajuda</li>
            <li>Mangás</li>
            <li>Ficção cientifica</li>
            <li>Mistério</li>
            <li>Literatura</li>
            <li>Romance</li>
            <li>Infantil</li>
            <li></li>
            </ul>
        </div>
    <div className='destaque'>
    <h2>Destaque</h2>
    </div>
    <div id='interface'>
    <ListagemLivros/>
    </div>
    </>
  );
}

export default Home; 