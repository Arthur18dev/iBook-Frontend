import api from "./baseApi";



const CategoriaServices = {
    
    getAllCategoria: () => {
        return api.get('categoria')
    },

}



export default CategoriaServices;