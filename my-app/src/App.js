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
      <div className='imperial-script-regular' style={{fontSize:'5vh', color:'#006527', paddingTop:'7vh', fontWeight:'bold', textAlign:'left', paddingLeft:'4vw'}}>
        Mis XV años
      </div>
      <div className='imperial-script-regular' style={{fontSize:'5vh', color:'#006527', fontWeight:'bold', textAlign:'center', paddingLeft:'3vw', float:'left', width:'25vh'}}>
        <p>Salma Quezada Olivares</p>
      </div>
      <div className='rectangulo-rotado' style={{paddingLeft:'10vw'}}>
        <img src='/ImagenesInvitacion/CarreteCamara.png' alt='Camera reel' className='rectangulo-rotado' style={{rotate:'-20deg', right:'15vw', width:'75vw', height:'75vh'}}/>
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
      <CountdownTimer targetDate={targetDate}/>
      <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly-1' style={{bottom: '131vh', left: '50vw', width:'15vw'}}/>
      <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly-1' style={{bottom:'100vh', left:'80vw', width:'20vw'}}/>
      <img src='/ImagenesInvitacion/VariasMariposasVerdes.png' alt='Butterfly' className='image butterfly-2' style={{bottom:'115vh', left:'43vw'}}/>
      <img src='/ImagenesInvitacion/MariposaVerde.png' alt='Butterfly' className='image butterfly-1' style={{bottom:'90vh', left:'20vw', width:'20vw'}}/>
      <img src='/ImagenesInvitacion/FloresVerdes.png' alt='GreenFlower' className='image flower' style={{bottom:'80vh', left:'65vw'}}/>
      <img src='/ImagenesInvitacion/MasFloresVerdes.png' alt='Flowers' className='image flower' style={{bottom:'135vh', left:'70vw', rotate:'90deg'}}/>
    </div>
    

  );
}

export default App;
