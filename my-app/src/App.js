import React from 'react';
import CountdownTimer from "./CountDownTimer";
import './App.css';



const Button = ({ children, onClick }) => (
  <button
    className="responsive-btn"
    onClick={onClick}
  >
    {children}
  </button>
);






function App() {

  const targetDate = "2025-06-28T19:30:00";

  const images=[
    "/ImagenesInvitacion/IMG_1908.jpg",
    "/ImagenesInvitacion/IMG_2474.jpg",
    "/ImagenesInvitacion/IMG_2512.jpg"
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
            <Button variant='primary' onClick={()=>console.log("click")}>Ubicación</Button>
            <Button variant='primary' onClick={()=>console.log("click")}>Itinerario</Button>
            <Button variant='primary' onClick={()=>console.log("click")}>DressCode</Button>
            <Button variant='primary' onClick={()=>console.log("click")}>Misa</Button>
            <Button variant='primary' onClick={()=>console.log("click")}>Boletos</Button>
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

      <h1 className='Font1-Prayer'>Confirma tu asistencia lo antes posible</h1>

    </div>
    
    

  );
}

export default App;
