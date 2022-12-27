import React from 'react';
import App from '../App';

export function Producto(){
  return(
    <div className='contenedor-producto'>
      <img 
      className='imagen-producto' 
      src={require('../img/img-cama.png')}
      alt='Icono de cama'
      />
      <div className='Contenedor-texto-nombre'>
        <p className='nombre-producto'>Beds</p>
      </div>
    </div> 
  );
}

