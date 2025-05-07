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
    { value: '019380', label: 'Familia Pérez Quezada', boletos: '4 adultos', mensaje: message },
    { value: '122182', label: 'Familia Santoyo Quezada', boletos: '4 adultos', mensaje: message },
    { value: '192054', label: 'Familia Trujillo Quezada', boletos: '3 adultos y 2 niños', mensaje: message },
    { value: '123951', label: 'Familia Quezada Romero', boletos: '5 adultos', mensaje: message },
    { value: '092319', label: 'Familia López Quezada', boletos: '6 adultos', mensaje: message },
    { value: '163846', label: 'Familia Barbosa Garza', boletos: '4 adultos', mensaje: message },
    { value: '001924', label: 'Familia Rebollo Olivares', boletos: '4 adultos, 1 niño y 1 bebé', mensaje: message },
    { value: '122276', label: 'Familia Sánchez Olivares', boletos: '2 adultos y 1 niño', mensaje: message },
    { value: '091280', label: 'Familia Olivares Armenta', boletos: '4 adultos', mensaje: message },
    { value: '118826', label: 'Troadio Quezada García y Guadalupe González Castro', boletos: '2 adultos', mensaje: message },
    { value: '010192', label: 'Familia Alvarado Ortiz', boletos: '6 adultos y 1 niño', mensaje: message },
    { value: '817263', label: 'Familia Olivares García', boletos: '3 adultos, 1 niño y 1 bebé', mensaje: message },
    { value: '716491', label: 'Familia Pérez González', boletos: '2 adultos', mensaje: message },
    { value: '998123', label: 'Alejandra Pérez González y Familia', boletos: '2 adultos y 2 niños', mensaje:message},
    { value: '246710', label: 'Angélica Pérez González y Familia', boletos: '2 adultos y 1 niño', mensaje:message},
    { value: '014251', label: 'Carmen Pérez González y Familia', boletos: '1 adulto y 1 niño', mensaje:message},
    { value: '121909', label: 'Jose Lucio García Chávez y Esposa', boletos: '2 adultos', mensaje:message},
    { value: '671651', label: 'Martin Serrano González y acompañante', boletos: '2 adultos', mensaje:message},
    { value: '980981', label: 'Adriana Serrano González y acompañante', boletos: '2 adultos', mensaje:message},
    { value: '105564', label: 'Genaro Serrano González y Esposa', boletos: '2 adultos', mensaje:message},
    { value: '975987', label: 'Victoria Ortiz y Familia', boletos: '2 adultos y 1 niño', mensaje:message},
    { value: '100192', label: 'Adrián Ortiz Barrera y acompañante', boletos: '2 adultos', mensaje:message},
    { value: '776152', label: 'Santiago García Chávez y Familia', boletos: '3 adultos', mensaje:message},
    { value: '432511', label: 'Francisco Luna Mora y acompañante', boletos: '2 adultos', mensaje:message},
    { value: '990912', label: 'Fernanda Rubí Sánchez Olivares y David Alberto Sánchez Morales', boletos: '2 adultos', mensaje:message},
    { value: '541768', label: 'Esmeralda Itzel Sánchez Olivares y Diego Alexei Meixueiro', boletos:'2 adultos', mensaje:message},
    { value: '251629', label: 'Familia Olmos Nieves', boletos: '7 adultos', mensaje:message},
    { value: '182531', label: 'Armando Olivares Ortiz y acompañante', boletos: '2 adultos', mensaje: message},
    { value: '889237', label: 'Ángel Román Olivares Esquivel', boletos:'1 adulto', mensaje: message},
    { value: '278728', label: 'Alejandro Olivares Ortiz', boletos: '1 adulto', mensaje:message},
    { value: '398909', label: 'Virgina Ortiz Barrera', boletos: '1 adulto', mensaje:message},
    { value: '343929', label: 'Carmen Sánchez Guerra y Familia', boletos: '2 adultos', mensaje:message},
    { value: 'amaite machuca', label: 'Amaite Machuca', boletos: '3 adultos', mensaje:message},
    { value: 'cecilia hernández', label: 'Cecilia Hernández', boletos:'1 adulto', mensaje:message},
    { value: 'ariana castillo', label: 'Ariana Castillo', boletos: '1 adulto', mensaje:message},
    { value: 'diana vázquez', label: 'Diana Vázquez', boletos: '1 adulto', mensaje:message},
    { value: 'andrea ivañez', label: 'Andrea Ivañez', boletos: '1 adulto', mensaje:message},
    { value: 'jonathan chávez', label: 'Jonathan Chávez', boletos: '1 adulto', mensaje: message},
    { value: 'pablo ruiz', label: 'Pablo Ruiz', boletos: '1 adulto', mensaje:message},
    { value: 'rocha solano', label: 'Natalia Rocha Solano y Ximena Rocha Solano', boletos:'2 adultos', mensaje:message},
    { value: 'nifel vázquez', label: 'Nifel Vázquez', boletos: '1 adulto', mensaje:message},
    { value: 'ximena arteaga', label: 'Ximena Artega', boletos: '1 adulto', mensaje:message},
    { value: 'yaretzi sánchez', label: 'Yaretzi Sánchez', boletos: '1 adulto', mensaje:message},

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