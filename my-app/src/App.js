import React from 'react';
import CountdownTimer from "./CountDownTimer";
import './App.css';

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
      <div className='Container'>
        <CountdownTimer targetDate={targetDate}/>
      </div>
  
      <div className='Container'>
        <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly b1'/>
        <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly b2'/>
        <img src='/ImagenesInvitacion/VariasMariposasVerdes.png' alt='Butterfly' className='image butterfly group'/>
        <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly b3'/>
        <img src='/ImagenesInvitacion/FloresVerdes.png' alt='GreenFlower' className='image flower f1' />
        <img src='/ImagenesInvitacion/MasFloresVerdes.png' alt='Flowers' className='image flower f2'/>
      </div>
    </div>
    

  );
}

export default App;
