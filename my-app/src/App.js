import React, { StrictMode, useState, useEffect, useRef} from 'react';
import CountdownTimer from "./CountDownTimer";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, href, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Ubicacion from './pages/Ubicacion';
import Itinerario from './pages/Itinerario';
import DressCode from './pages/DressCode';
import Church from './pages/Misa';
import Tickets from './pages/Boletos';
import ScrollToTop from './ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import WelcomeModal from './WelcomeModal';


let welcomeShown = false;


const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome]=useState(true);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Error reproduciendo el audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  }

  const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <polygon points="8,5 19,12 8,19" />
    </svg>
  );

  const PauseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <rect x="6" y="5" width="4" height="14" />
      <rect x="14" y="5" width="4" height="14" />
    </svg>
  );

    const handleModalClose = () => {
      setShowWelcome(false);
      if (!isPlaying) {
        toggleMusic();
      }
  };

  return (
    <div>
      <>
      {showWelcome && <WelcomeModal onClose={handleModalClose}/>}

      <audio ref={audioRef} src="/Background_Song.mp3" loop />
      <button 
        onClick={toggleMusic}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 1000,
          padding: 'clamp(5px, 10px, 30px)',
          backgroundColor: '#7C7121',
          borderRadius: '50%',
          cursor: 'pointer',
          outline:'none', 
          border:'none',
        }}
      >
         {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </>
    </div>
    
  );
};

const Button = ({ to, children }) => (
  
  <Link to ={to} className='responsive-btn'>
    {children}
  </Link>
);

const HomePage = () =>{


  const targetDate = "2025-06-28T19:30:00";

  const images=[
    "/FotosSalma/0.jpg",
    "/FotosSalma/1.jpg",
    "/FotosSalma/2.jpg",
    "/FotosSalma/3.JPG",
    "/FotosSalma/4.JPG",
    "/FotosSalma/5.JPG",
    "/FotosSalma/6.JPG",
    "/FotosSalma/7.JPG",
    "/FotosSalma/8.JPG",
    "/FotosSalma/9.jpg",
    "/FotosSalma/10.jpg",
    "/FotosSalma/11_1.jpeg",
    "/FotosSalma/12.jpeg",
    "/FotosSalma/13_1.jpeg",
    "/FotosSalma/14_1.jpeg",
    "/FotosSalma/15.jpeg",
    "/FotosSalma/16.jpeg",
    "/FotosSalma/17.jpeg",
  ];


  return (
      
    <div className="App">

      <h1 className='title'>Mis XV años</h1>
      <h1 className='name'>Salma Quezada
        <br/>
        <span>
          Olivares
        </span>
      </h1>
      <div className='rotated-container'>
        <img src='/ImagenesInvitacion/CarreteCamara.png' alt='Camera reel' className='camera-reel'/>
        <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly b1'/>
        <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly b2'/>
        <img src='/ImagenesInvitacion/VariasMariposasVerdes.png' alt='Butterfly' className='image butterfly group'/>
        <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly b3'/>
        <img src='/ImagenesInvitacion/FloresVerdes.png' alt='GreenFlower' className='image flower f1' />
        <img src='/ImagenesInvitacion/MasFloresVerdes.png' alt='Flowers' className='image flower f2'/>  
        {images.map((img, index) =>(
          <img 
            key={index}
            src={img}
            alt='Sliding'
            className='sliding-image'
            style={{'--i':index}}            
            />
        ))}
      </div>
      <div className='content-wrapper'>
        <div className='timer'>
          <CountdownTimer targetDate={targetDate}/>
        </div>
        <div className='buttons-names'>
          <div className='buttons'>
            <img src='/ImagenesInvitacion/Ubicacion.png' alt='Map-Icon' className='image icons'/>
            <img src='/ImagenesInvitacion/ItinerarioIcono.png' alt='Calendar-Icon' className='image icons'/>
            <img src='/ImagenesInvitacion/DressCode.png' alt='DressCode-Icon' className='image icons'/>
            <img src='/ImagenesInvitacion/Misa.png' alt='Church-Icon' className='image icons'/>
            <img src='/ImagenesInvitacion/Boletos.png' alt='Ticket-Icon' className='image icons'/>
          </div>
          <div className='names'>
            
            <Button variant='primary' to='/Address'>Dónde y cuándo</Button>
            <Button variant='primary' to='/Itinerary'>Itinerario</Button>
            <Button variant='primary' to='/DressCode'>DressCode</Button>
            <Button variant='primary' to='/Church'>Misa</Button>
            <Button variant='primary' to='/Tickets'>Boletos</Button>
          </div>

        </div>

        <div className='Prayer-container'>
          <h1 className='Font1-Prayer'>Con la bendición de Dios y en compañía de mis padres y padrinos</h1>
          <div className='Names-Prayer'>
            <h1 className='Font1-Prayer'>Mis padres</h1>
            <p className='Font2-Prayer'>Sr. Ramiro Quezada González</p>
            <p className='Font2-Prayer'>Sra. Patricia Olivares Ortiz</p>
          </div>
          <div className='Names-Prayer'>
            <h1 className='Font1-Prayer'>Mis padrinos</h1>
            <p className='Font2-Prayer'>Sr. Samuel López Muñoz</p>
            <p className='Font2-Prayer'>Sra. Elizabeth Quezada González</p>
          </div>
          <h1 className='Font1-Prayer'>¡Nos complace invitarte a ser parte de este gran día!</h1>
        </div>
      </div>

      <h1 className='Font1-Prayer'>Por favor, confirma tu asistencia lo antes posible</h1>

    </div>
  );
}


function App() {
  return(
    <Router>
      <BackgroundMusic/>
      <ScrollToTop/>
      <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Address' element={<Ubicacion/>}/>
        <Route path='/Itinerary' element={<Itinerario/>}/>
        <Route path='/DressCode' element={<DressCode/>}/>
        <Route path='/Church' element={<Church/>}/>
        <Route path='/Tickets' element={<Tickets/>}/>
      </Routes>
      </AnimatePresence>
    </Router>
  )
  
}

export default App;
