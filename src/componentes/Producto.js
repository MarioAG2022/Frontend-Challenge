import React from 'react';
import '../css/Producto.css';
import App from '../App';

function Producto(){
  return(
    <div className='contenedor-producto'>
      <div className='contenedor-iconos'>
        <img 
        className='imagen-producto' 
        src={require('../img/img-cama.png')}
        alt='Icono de cama'
        />
        <br></br>
        <div className='Contenedor-texto-nombre'>
          <p className='nombre-producto'>Beds</p>
        </div>
      </div>
    </div> 
  );
}

export default Producto;