import '../styles/Trayectoria.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
function Trayectoria() {
  return (
  <div className="TrayectoriaBox">
    <label>Coordenadas    Dirección</label>
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} />
        </FormGroup>
        <label>Punto de origen: </label>
        <input placeholder='Candelaria  Perez #1456'/> 
        <label>Punto de llegada:  </label>
        <input placeholder='Calzada de Tlalpan #1324'/>
        <img src='./mapa2.PNG' alt="mapa2" />
        <div className='BotonesBox'>
            <Link to="/colmena">
                <button className='boton'>Unirme a ruta</button>
            </Link>
            <Link to="/nuevaRuta">
                <button className='boton'>Crear ruta</button>
            </Link>
        </div>
    </div>
  )
} 

export  default Trayectoria;