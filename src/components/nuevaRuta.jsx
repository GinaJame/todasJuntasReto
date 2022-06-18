import '../styles/Trayectoria.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from './map';
function NuevaRuta() {
  return (
  <div>
        <h1>
            Trayectoria
        </h1>
        <MapComponent/>
        <div className='BotonesBox'>
            <Link to="/">
                <button className='boton'>Salvar</button>
            </Link>
            <Link to="/trayectoria">
                <button className='boton'>Cancelar</button>
            </Link>
        </div>
    </div>
  )
} 

export  default NuevaRuta;