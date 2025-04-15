import React, { useState } from "react";
import './Boletos.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const message = 'Su majestad Salma, solicita su presencia en la celebración de su XV aniversario. Una noche mágica en su honor.';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {children}
      </div>
    </div>
  );
};

const Button = ({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className='responsive-btn-Boletos'>
      {children}
    </Link>
  </motion.div>
);

const CodeInput = ({ setSelectedOption, closeModal }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const options = [
    { value: 'opcion1', label: 'Familia Pérez Quezada', boletos: '4 personas', mensaje: message },
    { value: 'opcion2', label: 'Familia Santoyo Quezada', boletos: '4 personas', mensaje: message },
    { value: 'opcion3', label: 'Familia Trujillo Quezada', boletos: '5 personas', mensaje: message },
    { value: 'opcion4', label: 'Familia Quezada Romero', boletos: '5 personas', mensaje: message },
    { value: 'opcion5', label: 'Familia Lopez Quezada', boletos: '6 personas', mensaje: message },
    { value: 'opcion6', label: 'Familia Gómez Garza', boletos: '4 personas', mensaje: message },
    { value: 'opcion7', label: 'Familia Rebollo Olivares', boletos: '5 personas y 1 niño', mensaje: message },
    { value: 'opcion8', label: 'Familia Sánchez Olivares', boletos: '7 personas', mensaje: message },
    { value: 'opcion9', label: 'Familia Olivares Armenta', boletos: '4 personas', mensaje: message },
    { value: 'opcion10', label: 'Familia Quezada González', boletos: '2 personas', mensaje: message },
    { value: 'opcion11', label: 'Familia Alvarado Ortiz', boletos: '7 personas', mensaje: message },
    { value: 'opcion12', label: 'Familia Olivares García', boletos: '4 personas y 1 niño', mensaje: message },
    { value: 'opcion13', label: 'Familia Pérez González', boletos: '7 personas y 4 niños', mensaje: message },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = options.find(opt => opt.value === code.trim().toLowerCase());
    
    if (selected) {
      setSelectedOption({
        family: selected.label,
        tickets: selected.boletos,
        mesaje: selected.mensaje
      });
      setError('');
      closeModal();
    } else {
      setError('Código inválido. Por favor intenta nuevamente.');
    }
    setCode('');
  };

  return (
    <div className="code-container">
      <h2 className="modal-title">Ingresa tu código de invitación</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          // placeholder="Ejemplo: opcion1"
          className="code-input"
          autoFocus
        />
        <div className="Buttons-Container">
          <button type="submit" className="code-button">
            Validar
          </button>
          <Button to='/'>Regresar</Button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

const Boletos = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="Main-page-Boletos">
      {showModal && (
        <Modal>
          <CodeInput 
            setSelectedOption={setSelectedOption}
            closeModal={() => setShowModal(false)}
          />
        </Modal>
      )}
      
      <div className="Container-Boletos">
        {selectedOption && (
          <div className="selection-info">
            <h1 className="Font1-Boletos">Invitación válida para:</h1>
            <p className="selected-family">{selectedOption.family}</p>
            <p className="tickets-info">Cantidad de boletos: {selectedOption.tickets}</p>
            <p className="mensaje-boletos">Mensaje: {selectedOption.mesaje}</p>
          </div>
        )}
      </div>

      <motion.div 
        className="Button-DressCode"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button to='/'>Regresar</Button>
      </motion.div>
    </div>
  );
};

export default Boletos;