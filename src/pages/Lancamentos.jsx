import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CardLivro from '../components/CardLivro';

const lancamentos = [
  {
    imagem: 'https://m.media-amazon.com/images/I/51eJpUzz8RL.jpg',
    titulo: 'Mitologia Nórdica',
    autor: 'Neil Gaiman',
    descricao: 'Edição em Português',
    frete: 'Frete grátis',
    sinopse: 'Fascinado por essa mitologia desde a infância, o autor compôs uma coletânea de quinze contos que começa com a narração da origem do mundo e mostra a relação conturbada entre deuses, gigantes e anões, indo até o Ragnarök, o assustador cenário do apocalipse que vai levar ao fim no mundo. Às vezes intensos e sombrios, outras vezes divertidos e heroicos, os contos retratam tempos longínquos em que os feitos dos deuses eram contados ao redor da fogueira em noites frias e estreladas.',
    totalPaginas: 240,
    idioma: 'Português',
    edicao: 'Intrínseca',
    dataPublicacao: '13 de Março de 2017',
    preco: 'R$ 9,99'
},
{
  imagem: 'https://m.media-amazon.com/images/I/51eJpUzz8RL.jpg',
  titulo: 'Mitologia Nórdica',
  autor: 'Neil Gaiman',
  descricao: 'Edição em Português',
  frete: 'Frete grátis',
  sinopse: 'Fascinado por essa mitologia desde a infância, o autor compôs uma coletânea de quinze contos que começa com a narração da origem do mundo e mostra a relação conturbada entre deuses, gigantes e anões, indo até o Ragnarök, o assustador cenário do apocalipse que vai levar ao fim no mundo. Às vezes intensos e sombrios, outras vezes divertidos e heroicos, os contos retratam tempos longínquos em que os feitos dos deuses eram contados ao redor da fogueira em noites frias e estreladas.',
  totalPaginas: 240,
  idioma: 'Português',
  edicao: 'Intrínseca',
  dataPublicacao: '13 de Março de 2017',
  preco: 'R$ 9,99'
},
// Add mais livros
]

function Lancamentos() {
  return (
    <><Header/>
    <Navbar/>
    <div className="container-fluid">
        <div className="book">
            <ul className="estrutura">
                {lancamentos.map((livro, index) => (
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
    </>
);
}

export default Lancamentos;