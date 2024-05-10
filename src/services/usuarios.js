const usuarios = {

    getAllUsuarios: () => {
        return (
            {
                nome: 'Arthur',
                email: 'arthur@gmail.com',
                senha: '12345'
            },
            {
                nome: 'Denildo',
                email: 'denildo@gmail.com',
                senha: '12345'
            },
            {
                nome: 'Gustavo',
                email: 'gustavo@gmail.com',
                senha: '12345'
            }
        )
    },

    getUsuariosId: (id) => {
        return  {
            nome: 'Arthur',
            email: 'arthur@gmail.com',
            senha: '12345'
        }
    }

}


export default usuarios;