import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const literatura = [
    {
        imagem: 'https://m.media-amazon.com/images/I/71lrH3ZLcaL._SY466_.jpg',
        titulo: 'O Conde de Monte-Cristo',
        autor: 'Autor: Alexandre Dumas',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `O Conde de Monte Cristo é um romance clássico escrito por Alexandre Dumas em 1844. A história
        gira em torno de Edmond Dantès, um jovem marinheiro que é traído por seus amigos e condenado
        injustamente à prisão. Após anos de encarceramento, ele escapa da prisão e encontra um
        tesouro escondido na ilha de Monte Cristo, que ele usa para se vingar de seus inimigos e
        recuperar sua posição na sociedade. Um dos mais notáveis clássicos da literatura francesa
        por mais de um século e meio, “O conde de Monte-Cristo” narra a história de Edmond Dantès.`,
        totalPaginas: 1500,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '8 de agosto de 1844',
        preco: 'R$ 5,99'
    }
  // Add mais livros
  ]

function Literatura() {
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
        <div className="container-fluid">
        <div className="book">
            <ul className="estrutura">
                {literatura.map((livro, index) => (
                   <div className="col-md-6 mb-4">
                    <li key={index} className="col-md-12 mb-4">
                        <CardLivro
                            imagem={livro.imagem}
                            titulo={livro.titulo}
                            autor={livro.autor}
                            descricao={livro.descricao}
                            frete={livro.frete}
                            sinopse={livro.sinopse}
                            totalPaginas={livro.totalPaginas}
                            idioma={livro.idioma}
                            edicao={livro.edicao}
                            dataPublicacao={livro.dataPublicacao}
                            preco={livro.preco}
                        />
                    </li>
                    </div>
                ))}
            </ul>
        </div>
    </div>
    <Rodape/>
    </>
  );
}

export default Literatura;