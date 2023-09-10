import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(ref.current);
  }, []);

  return (
    <div>
      <h1>Count {value}</h1>
    </div>
  );
};

export default UseRef;
