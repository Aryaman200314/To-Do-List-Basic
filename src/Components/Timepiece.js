import React, { useState, useEffect } from 'react'; 
import './Cards.css'; 

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="clock">
      {time}
    </div>
  );
};

export default Clock; 
