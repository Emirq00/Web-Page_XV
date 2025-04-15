import React from "react";
import './Misa.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
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
      <Link to={to} className='responsive-btn-Misa'>
        {children}
      </Link>
    </motion.div>
  );

const Misa = () =>{
    return(
        <motion.div 
            className="Main-page-Misa"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
            className="Container-Images-Misa"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.9 }}
            >
                <motion.img 
                src="/ImagenesInvitacion/Iglesia.jpg" 
                alt="Church image" 
                className="image Church-1"
                variants={imageVariants}
                />
                <motion.img 
                src="/ImagenesInvitacion/Iglesia2.jpg" 
                alt="Church image" 
                className="image Church-2"
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
            className="Container-Title-Details-Misa"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            >

              <motion.h1 
                className="Title-Misa"
                variants={textVariants}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, textShadow: "0 0 10px rgba(124,113,33,0.3)" }}
              >
                Parroquia de la Santísima Trinidad
              </motion.h1>

              <motion.p 
                className="Details-Misa"
                variants={textVariants}
                transition={{ delay: 0.3 }}
                >
                Cuándo: 28 de junio del 2025, 17:45 hrs.
              </motion.p>

              <motion.p 
                className="Details-Misa"
                variants={textVariants}
                transition={{ delay: 0.4 }}
                >
                Dirección: B y, Ote. 251, Av Sur 12, Agrícola Oriental, Iztacalco, 08500 Ciudad de México, CDMX.
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
                <ExternalButton url='https://maps.app.goo.gl/W9SEUx9w3gTMtH1H9'>Ver mapa</ExternalButton>
              </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Misa;