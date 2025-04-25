import React from "react";
import { delay, motion } from "framer-motion";
import './Ubicacion.css';
import { Link } from 'react-router-dom';
import ExternalButton from "./ExternalButton";

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 120, delay:0.5 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 } 
  }
};

const Button = ({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className='responsive-btn-Ubicacion'>
      {children}
    </Link>
  </motion.div>
);

const Ubicacion = () => {
  return (
    <motion.div 
      className="Main-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="Images"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.9 }}
      >
        <motion.img 
          src="/ImagenesInvitacion/FotoSalon.jpg" 
          alt="Party-image" 
          className="image Roca-L-Club-1"
          variants={imageVariants}
        />
        <motion.img 
          src="/ImagenesInvitacion/Foto2Salon.jpg" 
          alt="Party-image" 
          className="image Roca-L-Club-2"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { type: "spring", stiffness: 120 }
            }
          }}
        />
      </motion.div>

      <motion.div 
        className="Info"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.h1 
            className="Title"
            variants={textVariants}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, textShadow: "0 0 10px rgba(124,113,33,0.3)" }}
        >
          Salón Roca L Club
        </motion.h1>
        
        <motion.p 
          className="Details"
          variants={textVariants}
          transition={{ delay: 0.3 }}
        >
          Día y hora: 28 de junio del 2025, 19:30 hrs.
        </motion.p>
        
        <motion.p 
          className='Details'
          variants={textVariants}
          transition={{ delay: 0.4 }}
        >
          Dirección: Av. Canal del Moral 41, Leyes de reforma 3ra Sección, Iztapalapa, 09310 Ciudad de México, CDMX
        </motion.p>
      </motion.div>

      <motion.div 
        style={{ display:'flex', justifyContent:'space-around', paddingBottom:'2em', paddingTop:'2em' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button variant='primary' to='/'>Regresar</Button>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalButton url='https://maps.app.goo.gl/jX8uejXz7ME8oVyo8'>Ver mapa</ExternalButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Ubicacion;