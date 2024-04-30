import React from 'react';
import { Link } from 'react-router-dom';
import { RiLockPasswordFill} from 'react-icons/ri';
import { MdEmail } from "react-icons/md";
import '../styles/login.css'


function CadastreSe() {
  return ( <>
    <div className='cadastro'>
      <div className='login'>
      <form action="">
      <h1>Login</h1>
      <div className='input-box'>
      <input type='email' placeholder='Email' required/><i><MdEmail /></i>
        </div>
        <div className='input-box'>
      <input type='password' placeholder='Senha' required/><i><RiLockPasswordFill /></i>
        </div>
        <div className="perguntas">
          <label><input type="checkbox"/>Marque</label>
          <a><Link to="/esqueceu">Esqueceu a senha?</Link></a>
        </div>
        <button type='enviar' className='botao'>Login</button>
        <div className='registrar'>
          <p>Não tem conta ainda?<a><Link to="/registre">Registrar</Link></a></p>
        </div>
      </form>
      </div>
    </div>
    </>
  );
}

export default CadastreSe;