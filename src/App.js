import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

//import milogo from './img/logo.png'
function App() {
  const [clics, setNumClics] =useState(0)


  const manejarClic = () => {
    setNumClics(clics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">

      <div className='mi-logo'>
        <h1 className='logo'>Contador de Clicks</h1>
      </div>

      <div className='contenedor'>
      <Contador 
       clics={ clics }
      />

      <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto="reiniciar"
          esBotonDeClic={true}
          manejarClic={reiniciarContador} />

      </div>
      
    </div>


  );
}

export default App;
