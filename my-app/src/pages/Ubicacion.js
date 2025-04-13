import React from "react";
import './Ubicacion.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ExternalButton from "./ExternalButton";



const Button = ({ to, children }) => (
    <Link to ={to} className='responsive-btn-Itinerario'>
      {children}
    </Link>
  );

const Ubicacion = () =>{
    return(
        <div className="Main-page">
            <div className="Images">
                <img src="/ImagenesInvitacion/FotoSalon.jpg" alt="Party-image" className="image Roca-L-Club-1"/>
                <img src="/ImagenesInvitacion/Foto2Salon.jpg" alt="Party-image" className="image Roca-L-Club-2"/>
            </div>
            <div className="Info">
                <h1 className="Title">Salón Roca L Club</h1>
                <p className="Details">Cuándo: 28 de junio del 2025, 19:30 hrs.</p>
                <p className='Details'>Dirección: Av. Canal del Moral 41, Leyes de reforma 3ra Sección, Iztapalapa, 09310 Ciudad de México, CDMX</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-around', paddingBottom:'2em', paddingTop:'2em'}}>
                <Button variant='primary' to='/'>Regresar</Button>
                <ExternalButton url='https://maps.app.goo.gl/jX8uejXz7ME8oVyo8'>Ver mapa</ExternalButton>
            </div>
        </div>
    )
}

export default Ubicacion;