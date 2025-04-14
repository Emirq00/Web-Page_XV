import React from "react";
import './DressCode.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Button = ({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className='responsive-btn-DressCode'>
      {children}
    </Link>
  </motion.div>
);

const DressCode = () => {
  return (
    <motion.div
      className="Main-page-DressCode"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="Marco"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.img 
          src="/ImagenesInvitacion/Marco.png" 
          alt="Frame Image" 
          className="image Frame-down"
          variants={itemVariants}
        />
      </motion.div>

      <motion.div 
        className="Container_text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h1 
          className="Text_DressCode"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Código de vestimenta Formal
        </motion.h1>
      </motion.div>

      <motion.div 
        className="Images-DressCode"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.5, delayChildren: 0.6 }}
      >
        <motion.img 
          src="/ImagenesInvitacion/Smoking.png" 
          alt="Smoking icon" 
          className="image Icons-DressCode"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 100 }}
        />
        <motion.img 
          src="/ImagenesInvitacion/VestidoDeNoche.png" 
          alt="Evening Gown" 
          className="image Icons-DressCode"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </motion.div>

      <motion.div 
        className="Marco"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.img 
          src="/ImagenesInvitacion/Marco.png" 
          alt="Frame Image" 
          className="image Frame-up"
          variants={itemVariants}
        />
      </motion.div>

      <motion.div 
        className="Button-DressCode"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button to='/'>Regresar</Button>
      </motion.div>
    </motion.div>
  );
}

export default DressCode;