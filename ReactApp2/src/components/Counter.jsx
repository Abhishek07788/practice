/* Make a small application using react 
   where on a button click it should count 
   from 0 to 10 and on clicking it again 
   it should count from 10 to 0.
*/

import React, { useRef, useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const handleClick = () =>{

  if(count === 0){
    ref.current = setInterval(()=>{
       setCount((prev)=> prev + 1);
     }, 1000);
  }else if(count == 10){
    ref.current = setInterval(()=>{
      setCount((prev)=> prev - 1);
    }, 1000);
  }
  }

  if(count == 10 || count === 0){
    clearInterval(ref.current)
  }


  return <div>
    <h1>{count}</h1>
    <button onClick={handleClick}>Start</button>
  </div>;
};

export default Counter;
