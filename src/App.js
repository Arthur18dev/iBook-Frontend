import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ListagemLivros from './components/ListagemLivros';
import router from './routers/router';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <>
    <RouterProvider router={router}>
      <div id="interface">
        <Header />
        <Navbar />
        <ListagemLivros />
      </div>
      </RouterProvider>
      </>
  );
}

export default App;