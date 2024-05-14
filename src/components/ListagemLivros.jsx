import '../styles/listagemlivros.css'
import CardLivro from './CardLivro'
import {useState, useEffect} from 'react'
import livrosServices from "../services/livros"

function ListagemLivros({categoriaId}) {
 
    const [livros, setLivros] = useState([]) 

    useEffect(()=>{
        if(categoriaId == 0) {
        livrosServices.getAllLivros().then(({data}) =>{
            setLivros(data)
        })
    }
    else {
        livrosServices.getLivrosCategoria(categoriaId).then(({data}) =>{
            setLivros(data)
        })
    }
    }, [categoriaId])
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