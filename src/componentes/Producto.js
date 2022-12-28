import React from 'react';
import '../css/Producto.css';
import Boton from './Boton';
import App from '../App';

function Producto(props){
  const manejarClic = () =>{
    console.log('Mas');
  }
  const manejarClicMenos = () =>{
    console.log('Menos');
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
        <Boton
            texto='Clic'
            esBotonDeMas={true}
            manejarClic={manejarClic}
            />
          <Boton
            texto='Menos'
            esBotonDeMas={false}
            manejarClic={manejarClicMenos}
          />
      </div>
  );
}

export default Producto;