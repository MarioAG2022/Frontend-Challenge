import React from 'react';

function Producto(){
  return(
    <div className='contenedor-producto'>
      <img 
      className='imagen-producto' 
      src={requiere('../img/img-carro.png')}
      alt='Icono de carro'
      />
    </div> 
  );
}