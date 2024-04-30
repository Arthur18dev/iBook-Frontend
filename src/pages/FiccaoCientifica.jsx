import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const ficcaoCientifica = [
    {
        imagem: 'https://m.media-amazon.com/images/I/51treZsNj0L._SY466_.jpg',
        titulo: 'Box Jogos Vorazes',
        autor: 'Autora: Suzane Collins',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `Este livro apresenta os três volumes da série Jogos Vorazes, um fenômeno global na literatura.
        Inovadora na sua abordagem distópica, a trilogia Jogos Vorazes ocorre em um futuro
        pós-apocalíptico, em um território anteriormente conhecido como América do Norte, agora
        denominado Panem. Este novo país é subdividido em treze Distritos, todos sob o controle
        opressivo da Capital. Todos os recursos produzidos nos Distritos são obrigatoriamente
        enviados para a Capital, e é estritamente proibido que os Distritos consumam seus próprios
        produtos.`,
        totalPaginas: 1500,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: 'Setembro de 2008',
        preco: 'R$ 5,99'
    }
  // Add mais livros
  ]

function FiccaoCientifica() {
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
                {ficcaoCientifica.map((livro, index) => (
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

export default FiccaoCientifica;