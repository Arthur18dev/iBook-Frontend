import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function CadastreSe() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='cadastro'>
        <div className='login'>
          <form action="">
            <h1>Recuperar</h1>
            <div className='input-box'>
              <input type='email' placeholder='Email' required/><i><MdEmail /></i>
            </div>
            <div className='input-box'>
              <input type={showPassword ? 'text' : 'password'} placeholder='Senha' required/>
              <i onClick={togglePasswordVisibility}>{showPassword ? <FaEye /> : <FaEyeSlash />}</i>
            </div>
            <div className="perguntas">
              <label><input type="checkbox"/>Marque</label>
            </div>
            <button type='enviar' className='botao'>Enviar</button>
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