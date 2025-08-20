import React from 'react';
import './App.css';
import DenunciasTable from './components/DenunciasTable';
import perfilImg from './img/perfil.jpg';
import bannerImg from './img/banner.png';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerImg})` }}>
        <div className="header-content">
          <div className="header-text">
            <h1>Sistema de Denúncias</h1>
            <p>Vereador Eduardo Magoga</p>
          </div>
          <div className="profile-photo">  
            <img src={perfilImg} alt="Foto de Perfil novo" />
          </div>
        </div>
      </header>
      <main className="App-main">
        <DenunciasTable />
      </main>
    </div>
  );
}

export default App;
