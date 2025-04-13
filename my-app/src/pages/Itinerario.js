import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './Itinerario.css';

const Button = ({ to, children }) => (
    <Link to ={to} className='responsive-btn-Itinerario'>
      {children}
    </Link>
  );

const progressItems=[
    {
        threshold:16,
        image: '/ImagenesInvitacion/Misa.png',
        title:'Misa', 
        description:'17:45 hrs.'
    },
    {
        threshold:33,
        image:'/ImagenesInvitacion/Recepcion.png',
        title:'Recepción',
        description:'19:30 hrs.'
    },
    {
        threshold:50,
        image:'/ImagenesInvitacion/Cena.png',
        title:'Cena',
        description:'20:30 hrs.'
    },
    {
        threshold:66, 
        image:'/ImagenesInvitacion/Vals.png',
        title:'Vals',
        description:'21:30 hrs.'
    },
    {
        threshold:83, 
        image:'/ImagenesInvitacion/Baile.png',
        title:'Baile', 
        description:'22:30 hrs.'
    },
    {
        threshold:100, 
        image:'/ImagenesInvitacion/FinFiesta.png',
        title:'Fin de la fiesta', 
        description:'01:30 hrs.'
    },
];



const ProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
  
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const scrolled = (scrollTop / documentHeight) * 100;
          setScrollPercent(scrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <div className="progress-container">
        <div className="progress-bar" style={{ height: `${scrollPercent}%` }}></div>
  
        {progressItems.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          return (
            <div
              key={index}
              className={`progress-item ${side}`}
              style={{ top: `${item.threshold}%` }}
            >
              <div
                className={`progress-circle ${scrollPercent >= item.threshold ? 'filled' : ''}`}
              ></div>
              <div
                className={`progress-content ${scrollPercent >= item.threshold ? 'visible' : ''}`}
              >
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      );
  };


const Itinerario = () => {

  return (
    <div className="Main-page_Itinerario">
      <h1 className="Title_Itinerario">Te compartimos los detalles de la celebración:</h1>
      
      <div className="content">
        <ProgressBar/>
      </div>

      <div className="button-back">
        <Button variant='primary' to='/'>Regresar</Button>
      </div>
      
    </div>
  );
};

export default Itinerario;
