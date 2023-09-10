import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.value = "1000";
    ref.current.focus();
    ref.current.style.color = "red";
  };
  return (
    <div>
      <Child ref={ref} />
      <button onClick={handleClick}>Update Input</button>
    </div>
  );
};

export default Parent;
