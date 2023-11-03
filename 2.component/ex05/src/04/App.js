import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [time,setTimes] = useState(new Date());

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    useEffect(() => {
        const intervalId = setInterval(() => {
          /* 시간 */
          setTicks((prevTicks) => prevTicks + 1);
          setTimes(new Date());
        }, 1000); 
        
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

    return (
        <>
            <Clock
                message={`ex04: ticks ${ticks}`}
                hours={hours}
                minutes={minutes}
                seconds={seconds}/>
        </>        
    );
}