import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Ref = () => {
  const ref = useRef(null);

  const handleClick = () => {
    console.log(ref.current.value);
  };

  useEffect(() => {
    ref.current.focus();
    ref.current.style.color = "red";
    ref.current.className = "red";
    console.log(ref);
  }, []);

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default Ref;
