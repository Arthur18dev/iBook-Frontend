import React from 'react';
import Header from '../components/Header';
import ListagemLivros from '../components/ListagemLivros';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { Link } from 'react-router-dom';
import imagemTerror from "../assets/imagem/Livro terror.jpg"; // Importa a imagem de um livro de terror
import imagemPequeno from '../assets/imagem/pequeno.jpg'; // Importa outra imagem
import imagemBatman from '../assets/imagem/batmanLivro.jpg';
import '../styles/destaque.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Cart from '../components/Cart/Cart';

function Home() {
  return (
    <>
      <Header />
      <Navbar />
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
        <div style={{ display: 'block', width: 1519, padding: 0, }}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={imagemTerror}
                alt="Image One"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={imagemPequeno}
                alt="Image Two"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={imagemBatman}
                alt="Image Two"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <ListagemLivros />
     
      <Rodape />
      <Cart />
    </>
  );
}

export default Home;
