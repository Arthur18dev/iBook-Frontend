import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const autoajuda = [
    {
        imagem: 'https://m.media-amazon.com/images/I/51Fe45NGwkL._SY466_.jpg',
        titulo: 'A Arte da Guerra',
        autor: 'Autor: Sun Tzu',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `"A Arte da Guerra", de Sun Tzu, é um tratado clássico sobre estratégia e tática militar
            escrito há mais de dois milênios na China Antiga. Apesar disso, esse texto figura em
            diversas listas de excelentes livros sobre negócios. Por quê? Simplesmente porque ele
            instrui líderes empresariais, CEOs e empreendedores a adotarem uma abordagem estratégica.
            Apesar do foco principal de “A Arte da Guerra” estar no confronto e na maneira de lidar com
            oponentes, os ensinamentos do general chinês transcendem o campo de batalha e podem ser
            empregados ao enfrentar rivais.`,
        totalPaginas: 100,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '5 A.C',
        preco: 'R$ 5,99'
    }
    // Add mais livros
]


function AutoAjuda() {
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