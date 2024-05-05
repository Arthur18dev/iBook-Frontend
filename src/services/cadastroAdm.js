
import baseApi from './baseApi';


const cadastroAdm = {
    logar: (form) => {
        return baseApi.post('/administrador', form);
    },
};




export default cadastroAdm;