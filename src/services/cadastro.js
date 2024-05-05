
import baseApi from './baseApi';


const cadastro = {
    logar: (form) => {
        return baseApi.post('/login', form);
    },
};

export default cadastro;