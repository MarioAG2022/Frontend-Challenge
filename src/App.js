
import './App.css';
import Producto from './componentes/Producto';
import logo from './img/logo.png';

function App() {

  return (
   
    <div className="App">
      
      <div className='contenedor-navegacion'>
       
          <img
            className='logo'
            src={logo}
            alt='Logo de la pagina'
          />
        
        <nav className='navegacion-principal'>
          <a href='#'>How We Work</a>
          <a href='#'>Services</a>
          <a href='#'>Free Quote</a>
          <a href='#'>Contact</a>
         </nav>
      </div>
         
        <h1>What items to store?</h1>
        <br></br>
        <p className='instrucciones'>
          Select which items you wish to store 
          before moving to your new home.
          We’ll keep ’em safe!
        </p>
         
      <div className='contenedor-componentes'>
        <Producto
          imagen='cama'
          nombre='Beds'
        />
        <Producto
          imagen='refri'
          nombre='Refrigerador'
        />
        <Producto
          imagen='mueble'
          nombre='Furniture'
        />
        <Producto
          imagen='micro'
          nombre='Oven'
        />
        <Producto
          imagen='sillon'
          nombre='Sofa'
        />
        <Producto
          imagen='tv'
          nombre='TV'
        />
        <Producto
          imagen='lavadora'
          nombre='Washer-dryer'
        />
        <Producto
          imagen='mesa'
          nombre='Dining'
        />
        <Producto
          imagen='desk'
          nombre='Desk'
        />
        <Producto
          imagen='armario'
          nombre='Wardrobe'
        />
      </div>
    </div>
  );
}

export default App;
