
function CardLivro({ imagem, titulo, autor, descricao, frete, sinopse, totalPaginas, idioma, dataPublicacao, edicao, preco }) {
    const apiWhatsapp = (titulo) => {
        let url = 'https://wa.me/5548936183165?text=Ol%C3%A1+gostaria+de+comprar+esse+livro+'+ titulo
        window.open(url, 'blank')
    }

    return (<>
        <img id="livro-pequeno" src={imagem} alt="Error" />
        <h2>{titulo}</h2>
        <h4>{autor}</h4>
        <h4>{descricao}</h4>
        <h4>{frete}</h4>
        <h5>Sinopse</h5>
        <p>{sinopse}</p>
        <div className="book2">
            <span>Tamanho {totalPaginas} páginas</span>
            <span>| Idioma {idioma} </span>
            <span>|{edicao} </span>
            <span>| {dataPublicacao}</span>
        </div>
        <div className="valor">
            <span>Preço: {preco}</span>
        </div>
        <div className="buttons">
            <a><button onClick={() => apiWhatsapp(titulo)} className="button">Comprar</button></a>
            <a><button className="button">Carrinho</button></a>
        </div>
    </>)

}

export default CardLivro
