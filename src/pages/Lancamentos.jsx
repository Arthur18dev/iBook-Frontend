import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CardLivro from '../components/CardLivro';
import Rodape from '../components/Rodape';
import '../styles/rodape.css'
import '../styles/navbar.css'
import ListagemLivros from '../components/ListagemLivros';
import {useState, useEffect} from 'react';
import CategoriaServices from '../services/categorias';


function PreVenda() {

  const [categoriaId, setcategoriaId] = useState(8) 
  const [categoria, setcategoria] = useState([]) 

  useEffect(()=>{
    CategoriaServices.getAllCategoria(1).then(({data}) =>{
        setcategoria(data)
    })
}, [])

  return (<>
    <Header />
    <Navbar />
<div className='cate'>
   
</div>
    <ListagemLivros categoriaId={categoriaId} />
    <Rodape />
  </>
  );
}

export default PreVenda;