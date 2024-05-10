import api from "./baseApi";



const livrosServices = {
    
    getAllLivros: () => {
        return api.get('livros')
    },
    getLivrosCategoria: (id) => {
        return api.get('livrosPorCategoria', {
            params: {
                categoriaId: id
            }
        })
    }
}



export default livrosServices;