import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../styles/login.css'
import cadastro from '../services/cadastro';
import cadastroAdm from '../services/cadastroAdm';


function CadastreSe() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      email: data.get('email'),
      senha: data.get('password'),
    };
    console.log(form);
    cadastro
      .logar(form)
      .then((res) => {
        console.log(res);
        if (!res.data.erro) {
          localStorage.setItem('user', res.data.user);
          window.location.href = '/';
        }
      })
      .catch(() => alert('Erro ao logar'));


  };



  return (
    <>
      <div className='cadastro'>
        <div className='login'>
          <form action="" onSubmit={handleSubmit} >
            <h1>Login</h1>
            <div className='input-box'>
              <input type='email' placeholder='Email' name="email" required /><i><MdEmail /></i>
            </div>
            <div className='input-box'>
              <input type={showPassword ? 'text' : 'password'} placeholder='Senha' name="password" required />
              <i onClick={togglePasswordVisibility}>{showPassword ? <FaEye /> : <FaEyeSlash />}</i>
            </div>
            <div className="perguntas">
              <label><input type="checkbox" />Marque</label>
              <a><Link to="/esqueceu-a-senha">Esqueceu a senha?</Link></a>
            </div>
            <button type='submit' className='botao'>Login</button>
            <div className='registrar'>
              <p>Não tem conta ainda?<a><Link to="/registrar-se">Registrar</Link></a></p>
            </div>
          </form>
        </div>
      </div>


    </>
  );
}

export default CadastreSe;