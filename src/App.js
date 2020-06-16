import React from 'react';
import './css/style.css';
import icon from './icon.png';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img className="card__img" src={icon} alt="icon picture"/>
        <h1 className="card__title">Nico Ignacio</h1>
        <p className="card__desc">Front End Developer</p>
        <p className="card__email">helloNico@something.com</p>
        
        <h2 className="card__subTitle">Skills</h2>
        

      </div>
    </div>
  );
}

export default App;
