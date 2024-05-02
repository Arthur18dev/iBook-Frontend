import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Rodape from '../components/Rodape';
import CardLivro from '../components/CardLivro';
import '../styles/rodape.css'



const romance = [
    {
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_681672-MLU50456261486_062022-O.webp',
        titulo: 'A Aurora da Lótus',
        autor: 'Autora: Babi A. Sette',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `"A Aurora da Lótus" é um romance cativante ambientado no Egito Antigo, onde Zarah, uma jovem
        do bairro hebreu, se vê envolvida em um jogo de sedução com Ramose, um líder militar
        egípcio. Apesar das barreiras sociais e culturais, eles se entregam a uma paixão proibida,
        desafiando convenções e enfrentando conflitos internos. A narrativa aborda temas como
        autonomia, amor genuíno e abdicação, enquanto Zarah busca reescrever sua história e
        descobrir sua verdadeira essência. A obra é elogiada por sua intensidade emocional, seus
        personagens multifacetados.`,
        totalPaginas: 350,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '16 de novembro de 2021',
        preco: 'R$ 5,99'
    },
    {
        imagem: 'https://m.media-amazon.com/images/I/618fXbK+OkL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
        titulo: 'Crepúsculo',
        autor: 'Autora: Stephenie Meyer',
        descricao: 'Edição em Português',
        frete: 'Frete grátis',
        sinopse: `Isabella Swan chega à nublada e chuvosa cidadezinha de Forks – último lugar onde gostaria de viver. Tenta se adaptar à vida provinciana na qual aparentemente todos se conhecem, lidar com sua constrangedora falta de coordenação motora e se habituar a morar com um pai com quem nunca conviveu.`,
        totalPaginas: 480,
        idioma: 'Português',
        edicao: 'Editora Principis',
        dataPublicacao: '26 de Março de 2008',
        preco: 'R$ 5,99'
    },
    // Add mais livros
]

function Romance() {
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
                    {romance.map((livro, index) => (
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

export default Romance;