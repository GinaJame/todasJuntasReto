import { Link } from 'react-router-dom';
import '../styles/Colmena.css';

function Colmena() {
  const colmena ={
    transporte: "Metro",
    horario: "08:00am",
    usuarios: ["DianaPilar@startup.com","LucildaTorres@startup.com", "GuadalupeCastorena@startup.com"]
  }
  return (
    <div className=" ColmenaBox">
        <h3>Medio de transporte: {colmena.transporte}</h3>
        <h3>Número de personas que lo usan: {colmena.usuarios.length}</h3>
        <h3> Horario habitual de salida de la primera parada:  {colmena.horario} </h3>
        <h3>Directorio: </h3>
        <ul>
          {
            colmena.usuarios.map(usuario => <li>{usuario}</li>)
          }
        </ul>
        <img src='./mapa2.PNG' alt="mapa2" />
    </div>
  )
} 

export  default Colmena;