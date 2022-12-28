import React from 'react';
import '../css/Producto.css';
import '../css/Boton.css';
import '../css/Contador.css';
import Boton from './Boton';
import Contador from './Contador';
import { useState } from 'react';

function Producto(props){
  const [numClics,setNumClics] = useState(0); 
  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }
  const manejarClicMenos = () =>{
    setNumClics(numClics - 1);
  }
  const manejarClicClean = () =>{
    setNumClics(0);
  }
  
  return(
      <div className='contenedor-iconos'>
        
        <img 
          className='imagen-producto' 
          src={require(`../img/img-${props.imagen}.png`)}
          alt='Icono de cama'
        />
        <div className='contenedor-texto-nombre'>
          <p className='nombre-producto'>{props.nombre}</p>
        </div>
        <div className='contenedor-contador'>
          <Boton
            className='operador'
            texto='+'
            esBotonDeMas={true}
            manejarClic={manejarClic}
          />
          <Contador numClics={numClics}/>
          <Boton
            className='operador'
            texto='-'
            esBotonDeMas={false}
            manejarClic={manejarClicMenos}
          />
          </div>
          <Boton
            className='limpiador'
            texto='Clear'
            esBotonDeMas={false}
            manejarClic={manejarClicClean}
            />
      </div>
        
  );
}

export default Producto;