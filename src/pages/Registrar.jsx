import React, { useState } from 'react';
import "../styles/registrar.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Registrar() {
  const [showPassword, setShowPassword] = useState(false);
  const [nome, setNome] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNomeChange = (event) => {
    const nomeDigitado = event.target.value;
    const primeiroNome = nomeDigitado.split(' ')[0]; // Obtém o primeiro nome
    const nomeMaiusculo = primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1); // Transforma a primeira letra do primeiro nome em maiúscula
    setNome(nomeMaiusculo + nomeDigitado.slice(primeiroNome.length)); // Reconstroi o nome com o primeiro nome em maiúscula
  };

  return (
    <>
      <div className='cadastro'>
        <div className='login'>
          <form action="">
            <h1>Registrar</h1>
            <div className='input-box'>
              <input
                type='text'
                placeholder='Nome'
                value={nome}
                onChange={handleNomeChange}
                required
              />
              <i></i>
            </div>
            <div className='input-box'>
              <input type='email' placeholder='Email' required /><i><MdEmail /></i>
            </div>
            <div className='input-box'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Senha'
                required
              />
              <i onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </i>
            </div>
            <div className="perguntas">
              <label><input type="checkbox" />Marque</label>
              <a><Link to="/esqueceu-a-senha">Esqueceu a senha?</Link></a>
            </div>
            <button type='enviar' className='botao'>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registrar;
