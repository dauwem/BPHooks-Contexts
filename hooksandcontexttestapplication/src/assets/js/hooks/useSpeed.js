import { useState, useEffect } from 'react';

function useSpeed(index, period) {
  const [miles, setMiles] = useState(index); 

  useEffect(() => {
    let interval = setInterval(() => {
      setMiles(miles + 1);
    }, period);
    return function cleanup() {
      clearInterval(interval);
    }
  });
  
  if(miles <= 100) {
    return miles;
  } 
  return 100;
}

export default useSpeed;