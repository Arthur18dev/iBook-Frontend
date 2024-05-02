import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const mangas = [
    {
        imagem: 'https://m.media-amazon.com/images/I/71S8O-3xLVL._AC_UF1000,1000_QL80_.jpg',
        titulo: 'Ataque dos Titãs Vol. 1',
        autor: 'Autor: Hajime Isayama',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `Os poucos sobreviventes viram sua civilização reduzida a um território protegido por muralhas, que foram capazes de manter a ameaça afastada por mais de cem anos. Mas tanto tempo de tranquilidade está prestes a ruir, com o ataque de um titã mais alto e poderoso do que a enorme muralha!`,
        totalPaginas: 200,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '9 de setembro de 2009',
        preco: 'R$ 5,99'
    },
    // Add mais livros
]


function Mangas() {
    return (<>
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
        <div className="container-fluid">
            <div className="book">
                <ul className="estrutura">
                    {mangas.map((livro, index) => (
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
        <Rodape />
    </>
    );
}

export default Mangas;