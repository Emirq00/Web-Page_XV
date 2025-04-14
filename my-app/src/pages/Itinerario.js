import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Itinerario.css';
import { motion } from "framer-motion";



const progressItems = [
  {
    threshold: 16,
    image: '/ImagenesInvitacion/Misa.png',
    title: 'Misa', 
    description: '17:45 hrs.'
  },
  {
    threshold: 33,
    image: '/ImagenesInvitacion/Recepcion.png',
    title: 'Recepción',
    description: '19:30 hrs.'
  },
  {
    threshold: 50,
    image: '/ImagenesInvitacion/Cena.png',
    title: 'Cena',
    description: '20:30 hrs.'
  },
  {
    threshold: 66, 
    image: '/ImagenesInvitacion/Vals.png',
    title: 'Vals',
    description: '21:30 hrs.'
  },
  {
    threshold: 83, 
    image: '/ImagenesInvitacion/Baile.png',
    title: 'Baile', 
    description: '22:30 hrs.'
  },
  {
    threshold: 100, 
    image: '/ImagenesInvitacion/FinFiesta.png',
    title: 'Fin de la fiesta', 
    description: '01:30 hrs.'
  },
];

const Button = ({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className='responsive-btn-Itinerario'>
      {children}
    </Link>
  </motion.div>
);
const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const adjustedProgressItems = progressItems.map((item, index) => {
    if (index === progressItems.length - 1) {
      return { ...item, threshold: 95 };
    }
    return item;
  });

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


  const maxBarHeight = isMobile ? 95 : 100;
  const lineHeight = scrollPercent > maxBarHeight ? maxBarHeight : scrollPercent;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ height: `${lineHeight}%` }}></div>
      {adjustedProgressItems.map((item, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        return (
          <div
            key={index}
            className={`progress-item ${side}`}
            style={{ top: `${item.threshold}%` }}
          >
            <div className={`progress-circle ${scrollPercent >= item.threshold ? 'filled' : ''}`}></div>
            <div className={`progress-content ${scrollPercent >= item.threshold ? 'visible' : ''}`}>
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
      <motion.h1 
        className="Title_Itinerario"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Te compartimos los detalles de la celebración:
      </motion.h1>

      <div className="content">
      <motion.img 
        src="/ImagenesInvitacion/SlideIcon.png" 
        alt="Slide icon" 
        className="Image_Itinerario"
        animate={{
          y: [0, 25, 0], 
          opacity: [1, 0.8, 1] 
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
        <ProgressBar />
      </div>

      <motion.div 
        className="button-back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button to='/'>Regresar</Button>
      </motion.div>
    </div>
  );
};

export default Itinerario;