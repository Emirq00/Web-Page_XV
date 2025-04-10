import { useState, useEffect, useCallback } from "react"; 
import './App.css';


const CountDownTimer = ({targetDate}) =>{
    const calculateTimeLeft = useCallback(() => {
        const difference = +new Date(targetDate)-+new Date();
        let timeLeft = {};
        if(difference>0){
            timeLeft={
                days:Math.floor(difference/(1000*60*60*24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }, [targetDate]);
    const [timeLeft, setTimeLeft]=useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() =>{ 
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    const padNumber = (num) => num.toString().padStart(2, "0");

    return(
        <div className="countdown-container">
            <div className="time-box">
                <span className="timer">Solo faltan:</span>
                <br/>
                <span className="timer" >{padNumber(timeLeft.days || 0)}</span>
                <span className="timer" > : {padNumber(timeLeft.hours || 0)}</span>
                <span className="timer"> : {padNumber(timeLeft.minutes || 0)}</span>
                <span className="timer"> : {padNumber(timeLeft.seconds || 0)}</span>
            </div>
            <div className="time-box">
                <span className="imperial-script-regular" style={{fontSize:'4vw', padding:'2vw'}}>Días </span>
                <span className="imperial-script-regular" style={{fontSize:'4vw', padding:'1vw'}}>Horas </span>
                <span className="imperial-script-regular"style={{fontSize:'4vw', padding:'1vw'}}>Minutos </span>
                <span className="imperial-script-regular"style={{fontSize:'4vw'}}>Segundos</span>
            </div>
            
        </div>
    )
    
}

export default CountDownTimer;

