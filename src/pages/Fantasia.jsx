import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const fantasia = [
    {
        imagem: 'https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg',
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'Autora: J.K. Rolling',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `Deveria ser um livro exclusivamente para o público jovem, mas pessoas de todas as faixas
        etárias ao redor do globo se maravilham com Harry Potter um fenômeno literário que desafia
        expectativas. Harry Potter é um garoto cujos pais, magos, foram aniquilados por um bruxo
        muito poderoso quando ele ainda era um bebê. Ele foi então acolhido pela família dos tios
        que não tinham nenhuma ligação com o sobrenatural. Até completar 10 anos, Harry foi
        maltratado pelos tios, recebia herança de roupas velhas do primo, usava óculos consertados e
        era tratado como um incômodo.`,
        totalPaginas: 309,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '26 de junho de 1997',
        preco: 'R$ 5,99'
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
    {
        imagem: 'https://m.media-amazon.com/images/I/91+1SUO3vUL._SL1500_.jpg',
        titulo: 'A Guerra dos Tronos: As Crônicas de Gelo e Fogo',
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
    // Add mais livros
]

function Fantasia() {
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
                    {fantasia.map((livro, index) => (
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

export default Fantasia;