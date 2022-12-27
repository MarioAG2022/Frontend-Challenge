
import './App.css';
import Producto from './componentes/Producto';

function App() {
  return (
    <div className="App">
   
        <h1>What items to store?</h1>
        <p className='instrucciones'>
          Select which items you wish to store 
          before moving to your new home.
          We’ll keep ’em safe!
        </p>
         
      <div className='contenedor-componentes'>
        <Producto
          imagen=''
          nombre='Beds'
        />
      </div>
    </div>
  );
}

export default App;
