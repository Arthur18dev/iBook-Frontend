import React from 'react';
import '../styles/rodape.css';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';


function Rodape() {
  return (
    <div className="mainrodape">
      <div className="rodape">
        <div className="rodape-content">
          <div id="rodape-links">
            <ul>
          <li><a href="/">Início</a></li>
            <li><a href="/sobre-nos">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
          
          <div id="rodape-social">
            <a href="https://twitter.com"><FaXTwitter /></a>
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://youtube.com"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rodape;