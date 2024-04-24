import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CardLivro from '../components/CardLivro';
import Rodape from '../components/Rodape';
import { Link } from 'react-router-dom';
import '../styles/rodape.css'

const prevenda = [
  {
    imagem: 'https://m.media-amazon.com/images/I/91g9Dvtf+jL._SL1500_.jpg',
    titulo: 'It: A coisa',
    autor: 'Stephen King',
    descricao: 'Edição em Português',
    frete: 'Frete grátis',
    sinopse: 'Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. ',
    totalPaginas: 1104,
    idioma: 'Português',
    edicao: 'Suma',
    dataPublicacao: '24 de Julho de 2014',
    preco: 'R$ 14,99'
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/91+1SUO3vUL._SL1500_.jpg',
    titulo: 'A Guerra dos Tronos : As Crônicas de Gelo e Fogo',
    autor: 'George R. R. Martin',
    descricao: 'Edição em Português',
    frete: 'Frete grátis',
    sinopse: 'Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.',
    totalPaginas: 600,
    idioma: 'Português',
    edicao: 'Suma',
    dataPublicacao: '25 de Março de 2019',
    preco: 'R$ 14,99'
  }
  // Adicione mais livros conforme necessário
];


function PreVenda() {
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
                {prevenda.map((livro, index) => (
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

export default PreVenda;