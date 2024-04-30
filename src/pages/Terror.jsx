import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const terror = [
    {
        imagem: 'https://m.media-amazon.com/images/I/51Iv9fXJbbL.jpg',
        titulo: 'O Chamado de Cthulhu',
        autor: 'Autor: H.P. Lovecraft',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `O Chamado de Cthulhu é uma narrativa do escritor norte-americano H.P. Lovecraft que
        rapidamente se tornou um marco do gênero do horror. Foi redigido em 1926 e inicialmente
        publicado na revista Weird Tales, dos Estados Unidos, em fevereiro de 1928. Cthulhu é uma
        divindade que, nas primeiras páginas do conto, é retratada como uma figura de barro quase
        indescritível, sendo objeto de um culto ancestral dedicado a trazer sua ressurreição, o que
        acarretaria na ruína da humanidade. Nesta obra, encontramos este clássico junto com mais
        sete contos renomados do autor na literatura do medo.`,
        totalPaginas: 240,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '2 de fevereiro de 1928',
        preco: 'R$ 5,99'
    },
  {
      imagem: 'https://m.media-amazon.com/images/I/81Q+pJi4NjL._AC_UF1000,1000_QL80_.jpg',
      titulo: 'O Iluminado',
      autor: 'Stephen King',
      descricao: 'Edição em Português',
      frete: 'Frete grátis',
      sinopse: '“O lugar perfeito para recomeçar”, é o que pensa Jack Torrance ao ser contratado como zelador para o inverno. Hora de deixar para trás o alcoolismo, os acessos de fúria, os repetidos fracassos. Isolado pela neve com a esposa e o filho, tudo o que Jack deseja é um pouco de paz para se dedicar à escrita. Mas, conforme o inverno se aprofunda, o local paradisíaco começa a parecer cada vez mais remoto... e mais sinistro. Forças malignas habitam o Overlook, e tentam se apoderar de Danny Torrance, um garotinho com grandes poderes sobrenaturais. Possuir o menino, no entanto, se mostra mais difícil do que esperado. Então os espíritos resolvem se aproveitar das fraquezas do pai... ',
      totalPaginas: 520,
      idioma: 'Português',
      edicao: 'Suma',
      dataPublicacao: '22 de Agosto de 2017',
      preco: 'R$ 9,99'
  },
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
  }
  // Add mais livros
  ]

function Terror() {
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
                {terror.map((livro, index) => (
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

export default Terror;