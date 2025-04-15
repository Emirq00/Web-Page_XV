import React, {useState} from "react";
import './Boletos.css'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const message='Su majestad Salma, solicita su presencia en la celebración de su XV aniversario. Una noche mágica en su honor.'

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

const Dropdown = ({selectedOption, setSelectedOption}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const options = [
      { value: 'Hola', label: 'Familia Perez Quezada', boletos:2, mensaje:message},
      { value: 'opcion2', label: 'Familia Santoyo Quezada', boletos:3, mensaje:message},
      { value: 'opcion3', label: 'Familia Trujillo Quezada', boletos:3, mensaje:message},
      { value: 'opcion4', label: 'Familia Quezada Romero', boletos:3, mensaje:message},
      { value: 'opcion5', label: 'Familia Lopez Quezada', boletos:3, mensaje:message},
    ];
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option) => {
      setSelectedOption({family:option.label, tickets:option.boletos, mesaje:option.mensaje});
      setIsOpen(false);
    };
  
    return (
      <div className="dropdown-container">
        <button 
          className="dropdown-button" 
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedOption?.family || 'Selecciona una opción'}
        </button>
        
        {isOpen && (
          <ul className="dropdown-list" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
                role="option"
              >
                {option.label}     
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

const Boletos = () =>{
    const [selectedOption, setSelectedOption] = useState(null);

    return(
        <div className="Main-page-Boletos">
            <Dropdown
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            <div className="Container-Boletos">
                {selectedOption && (
                <div className="selection-info">
                    <h1 className="Font1-Boletos">Invitación válida para:</h1>
                    <p className="selected-family">
                    {selectedOption.family}
                    </p>
                    <p className="tickets-info">
                    Cantidad de boletos: {selectedOption.tickets}
                    </p>
                    <p className="mensaje-boletos">
                    Mensaje: {selectedOption.mesaje}
                    </p>
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
    )
}

export default Boletos;