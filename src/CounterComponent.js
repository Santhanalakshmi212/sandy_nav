import React, { useRef, useEffect,useState } from 'react';

const CounterComponent = () => {
    const counterRef = useRef(0);
    const  [count,setcount]=useState(0);

    useEffect(() => {
         console.log('Counter Ref:', counterRef.current);
    },[count]);

    const incrementCounter = () => {
      counterRef.current += 1;
      setcount((prevCount) => prevCount + 1);
  }; 

return (
    <div>
        <p>Counter Value(state):{count}</p>
        <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}
export default CounterComponent;
