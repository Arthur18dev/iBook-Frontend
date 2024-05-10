import React from 'react';
import Header from '../components/Header';
import ListagemLivros from '../components/ListagemLivros';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import imagemTerror from "../assets/imagem/Livro terror.jpg"; // Importa a imagem de um livro de terror
import imagemPequeno from '../assets/imagem/pequeno.jpg'; // Importa outra imagem
import imagemBatman from '../assets/imagem/batmanLivro.jpg';
import '../styles/destaque.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import Cart from '../components/Cart/Cart';
import {useState, useEffect} from 'react';
import CategoriaServices from '../services/categorias';
import '../styles/navbar.css'

function Home() {

  const [categoriaId, setcategoriaId] = useState(0) 
  const [categoria, setcategoria] = useState([]) 

  useEffect(()=>{
    CategoriaServices.getAllCategoria().then(({data}) =>{
        setcategoria(data)
    })
}, [])

  return (
    <>
      <Header />
      <Navbar onClick = {() => setcategoriaId(0) } />   
      <div className='categorias'>
        <h5>Categorias</h5>
        <ul>
       { categoria.map(item => <li onClick={()=> setcategoriaId(item.id)} key={item.id}><a>{item.nome}</a></li> )}
          
        </ul>
      </div>
      <div className='destaque'>
        <h2>Destaque</h2>
        <div style={{ display: 'block', width: 1519, padding: 0, }}>
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src={imagemTerror}
                alt="Image One"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src={imagemPequeno}
                alt="Image Two"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
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
      <ListagemLivros categoriaId={categoriaId} />
     
      <Rodape />
      {/* <Cart /> */}
    </>
  );
}

export default Home;
