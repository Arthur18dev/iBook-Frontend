import '../styles/listagemlivros.css'
import CardLivro from './CardLivro'



function ListagemLivros() {
 
    const livros = [
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
            totalPaginas: 36,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99',
            quantidade: '1'
        },
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
            totalPaginas: 96,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        },
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
            totalPaginas: 240,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        },
        {
            imagem: 'https://m.media-amazon.com/images/I/918kseGgo-L._AC_UF1000,1000_QL80_.jpg',
            titulo: 'Batman: O Longo Dia das Bruxas (Edição Definitiva)',
            autor: 'Autor: Jeph Loeb',
            descricao: 'Edição em Português',
            frete: 'Frete grátis',
            sinopse: `Uma série de assassinatos brutais espalham o medo por Gotham e fazem com que Batman, o
            tenente Gordon e o promotor público Harvey Dent corram contra o tempo para pegar o serial
            killer. Na história elaborada por Jeph Loeb, os mafiosos dominam a trama, com os grupos
            liderados por Carmine Falcone e Salvatore Maroni competindo por poder nas páginas. Enquanto
            isso, Batman, o capitão Jim Gordon e o promotor Harvey Dent se unem para enfrentar o
            crescimento do crime organizado na cidade.`,
            totalPaginas: 240,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        },
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
            totalPaginas: 240,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        },
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
            totalPaginas: 240,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        },
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
            totalPaginas: 240,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        },
        {
            imagem: 'https://m.media-amazon.com/images/I/71lrH3ZLcaL._SY466_.jpg',
            titulo: 'O Conde de Monte-Cristo',
            autor: 'Autor: Alexandre Dumas',
            descricao: 'Edição em Português',
            frete: 'Frete grátis',
            sinopse: `O Conde de Monte Cristo é um romance clássico escrito por Alexandre Dumas em 1844. A história
            gira em torno de Edmond Dantès, um jovem marinheiro que é traído por seus amigos e condenado
            injustamente à prisão. Após anos de encarceramento, ele escapa da prisão e encontra um
            tesouro escondido na ilha de Monte Cristo, que ele usa para se vingar de seus inimigos e
            recuperar sua posição na sociedade. Um dos mais notáveis clássicos da literatura francesa
            por mais de um século e meio, “O conde de Monte-Cristo” narra a história de Edmond Dantès.`,
            totalPaginas: 240,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        },
        {
            imagem: 'https://m.media-amazon.com/images/I/71S8O-3xLVL._AC_UF1000,1000_QL80_.jpg',
            titulo: 'Ataque dos Titãs Vol. 1',
            autor: 'Autor: Hajime Isayama',
            descricao: 'Edição em Português',
            frete: 'Frete grátis',
            sinopse: `Os poucos sobreviventes viram sua civilização reduzida a um território protegido por muralhas, que foram capazes de manter a ameaça afastada por mais de cem anos. Mas tanto tempo de tranquilidade está prestes a ruir, com o ataque de um titã mais alto e poderoso do que a enorme muralha!`,
            totalPaginas: 240,
            idioma: 'Português',
            edicao: 'Editora Principis',
            dataPublicacao: '12 de Dezembro 2019',
            preco: 'R$ 5,99'
        }
    ]
    return (<>
        <div className="container-fluid">
 
            <div className="book">
                <ul className="estrutura">
                    {livros.map(item => {
                        return (
                            <div className="col-md-6 mb-4">
                            <li className="col-md-12 mb-4">
                                <CardLivro
                                    imagem={item.imagem}
                                    titulo={item.titulo}
                                    autor={item.autor}
                                    descricao={item.descricao}
                                    frete={item.frete}
                                    sinopse={item.sinopse}
                                    totalPaginas={item.totalPaginas}
                                    idioma={item.idioma}
                                    edicao={item.edicao}
                                    dataPublicacao={item.dataPublicacao}
                                    preco={item.preco}
                                    quantidade={item.quantidade}
                                />
                            </li>
                            </div>
                        )
                    })}

                </ul>
            </div>
        </div>
    </>)
}


export default ListagemLivros