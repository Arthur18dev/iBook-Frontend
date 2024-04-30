import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { Link } from 'react-router-dom';
import '../styles/sobre-nos.css'
import '../styles/rodape.css'



function SobreNos() {
  return ( <>
    <Header/>
    <Navbar/>
    <div className='categorias'>
            <h5>Categorias</h5>
                <ul>
            <li><Link to="/fantasia">Fantasia</Link></li>
            <li><Link to="/terror">Terror</Link></li>
            <li><Link to="/auto-ajuda">Auto ajuda</Link></li>
            <li><Link to="/mangas">Mangás</Link></li>
            <li><Link to="/ficcao-cientifica">Ficção cientifica</Link></li>
            <li><Link to="/misterio">Mistério</Link></li>
            <li><Link to="/literatura">Literatura</Link></li>
            <li><Link to="/romance">Romance</Link></li>
            <li><Link to="/infantil">Infantil</Link></li>
            </ul>
        </div>
<div id='sobre'>
  <h1>O que é o iBook?</h1>
  <p>Bem-vindo ao iBook, a sua nova plataforma de entrega de livros. Com o iBook,  conectar-se aos seus livros favoritos nunca foi tão fácil! Inspirados pela  conveniência e simplicidade dos serviços de entrega de alimentos, criamos uma maneira igualmente simples para você receber seus livros preferidos diretamente na porta de sua casa.</p>
  <p>Na biblioteca virtual iBook, nossa missão é conectar entusiastas da leitura e colecionadores de livros, oferecendo uma plataforma dinâmica e acessível para compra e venda de obras literárias. Comprometemo-nos a proporcionar uma experiência de compra segura, conveniente e enriquecedora, onde os usuários possam encontrar uma ampla seleção de livros físicos, tanto novos quanto usados. Nosso objetivo é tornar a jornada de descoberta e aquisição de livros uma experiência inspiradora e satisfatória para todos os amantes da literatura, promovendo a paixão pela leitura e facilitando o acesso à diversidade de obras literárias em todo o mundo.</p>
  
  <h1>
  Nossa Missão
  </h1>
  <p>É uma plataforma que oferece a você, usuário apaixonado por livros, uma experiência única e envolvente de compra e venda de obras literárias. Nosso compromisso é proporcionar um ambiente amigável e intuitivo, onde você possa encontrar facilmente os livros que deseja adquirir e também vender aqueles que já não precisa mais. Buscamos ser o seu destino preferido para explorar novos títulos, descobrir tesouros literários e conectar-se com outros amantes da leitura. No iBook, acreditamos que cada livro tem uma história para contar e estamos aqui para ajudá-lo a encontrar as suas próximas aventuras literárias.</p>
  <p></p>

  <h3>  Por que escolher o iBook?</h3>
        <ul>
          <li>Conveniência máxima na compra de livros.</li>
          <li>Ampla variedade de títulos para todos os tipos de leitores.</li>
          <li>Suporte a livrarias locais, fortalecendo a economia da sua região.</li>
          <li>Recomendações personalizadas que atendem ao seu gosto literário.</li>
        </ul>
        <p>
          Venha explorar novos mundos e embarcar em aventuras literárias sem precedentes. 
            Baixe o iBook hoje mesmo e transforme a sua experiência de leitura!
        </p>
</div>
<Rodape/>
    </>
  );
}

export default SobreNos;