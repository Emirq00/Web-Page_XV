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
        <button className='enter-button' onClick={onClose}>

        </button>

      </motion.div>
    </div>
  );
};

export default WelcomeModal;