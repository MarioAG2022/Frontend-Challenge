import React from "react";

function Boton({texto, esBotonDeMas, manejarClic}){
	return(
		<button className={esBotonDeMas ? "boton-mas":'boton-menos' }
		onClick={manejarClic}>
				{texto}
		</button>
	)
}

export default Boton;