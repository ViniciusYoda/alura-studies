import React from 'react';
import Formulario from '../components/Formulario'
import Lista from '../components/Lista'
import style from  './App.module.scss'
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppSyle}>
      
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
