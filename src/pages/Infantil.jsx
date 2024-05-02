import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const infantil = [
    {
        imagem: 'https://m.media-amazon.com/images/I/51nNwwVSclL._AC_UF1000,1000_QL80_.jpg',
        titulo: 'O Pequeno Príncipe',
        autor: 'Autor: Antoine de Saint-Exupéry',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `Um piloto cai com seu avião no deserto e ali encontra uma criança loira e frágil. Ela diz ter
        vindo de um pequeno planeta distante. E ali, na convivência com o piloto perdido, os dois
        repensam os seus valores e encontram o sentido da vida. Com essa história mágica, sensível,
        comovente, às vezes triste, e só aparentemente infantil, o escritor francês Antoine de
        Saint-Exupéry criou há 70 anos um dos maiores clássicos da literatura universal. Não há
        adulto que não se comova.`,
        totalPaginas: 90,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '6 de abril de 1943',
        preco: 'R$ 5,99'
    }
    // Add mais livros
]


function Infantil() {
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
                    {infantil.map((livro, index) => (
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

export default Infantil;