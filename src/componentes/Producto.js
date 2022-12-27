import React from 'react';
import '../css/Producto.css';
import App from '../App';

function Producto(props){
  return(
    <div className='contenedor-producto'>
      <div className='contenedor-iconos'>
        <img 
        className='imagen-producto' 
        src={require('../img/img-cama.png')}
        alt='Icono de cama'
        />
        <div className='contenedor-texto-nombre'>
          <p className='nombre-producto'>{props.nombre}</p>
        </div>
      </div>
    </div> 
  );
}

export default Producto;