import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const misterio = [
    {
        imagem: 'https://m.media-amazon.com/images/I/918kseGgo-L._AC_UF1000,1000_QL80_.jpg',
        titulo: 'Batman: O Longo Dia das Bruxas (Edição Definitiva)',
        autor: 'Autor: Jeph Loeb',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `Uma série de assassinatos brutais espalham o medo por Gotham e fazem com que Batman, o
        tenente Gordon e o promotor público Harvey Dent corram contra o tempo para pegar o serial
        killer. Na história elaborada por Jeph Loeb, os mafiosos dominam a trama, com os grupos
        liderados por Carmine Falcone e Salvatore Maroni competindo por poder nas páginas. Enquanto
        isso, Batman, o capitão Jim Gordon e o promotor Harvey Dent se unem para enfrentar o
        crescimento do crime organizado na cidade.`,
        totalPaginas: 384,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '1º de janeiro de 1996',
        preco: 'R$ 5,99'
    }
  // Add mais livros
  ]

function Misterio() {
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
                {misterio.map((livro, index) => (
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

export default Misterio;