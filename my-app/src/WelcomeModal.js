import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './WelcomeModal.css';

const WelcomeModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <div className="modal-overlay-welcome">
      <motion.div
        className="modal-content-welcome"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {/* <img src='/ImagenesInvitacion/Sobre.png' alt='Letter envelope' className='image envelope'/> */}
        {/* <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem'}}>¡Bienvenido a mis XV!</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Estás por entrar a la experiencia digital de mi fiesta
        </p> */}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="enter-button"
          onClick={onClose}
        >
        </motion.button> 
      </motion.div>
    </div>
  );
};

export default WelcomeModal;