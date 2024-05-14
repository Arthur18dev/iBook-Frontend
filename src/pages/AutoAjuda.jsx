import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'
import { useState, useEffect } from 'react'
import livrosServices from "../services/livros"
import '../styles/navbar.css'



function AutoAjuda() {
    const [autoajuda, setautoajuda] = useState([])

    useEffect((id) => {
        livrosServices.getLivrosCategoria(id).then(({ data }) => {
            setautoajuda(data)
        })
    }, [])

    return (<>
        <Header />
        <Navbar />
        <div className='categorias'>
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
        </div>
        <div className="container-fluid">
            <div className="book">
                <ul className="estrutura">
                    {autoajuda.map((livro, index) => (
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

export default AutoAjuda;