import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const Memo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(1);

  const handle1 = () => {
    setCounter1(counter1 + 2);
  };

  const handle2 = () => {
    setCounter2(counter2 + 1);
  };

  const even = useMemo(() => {
    let i = 0;
    while (i < 999999999) i++;
    return counter2 % 2 === 0;
  }, [counter2]);

  return (
    <div>
      <h1>useMemo</h1>
      <hr />

      <button onClick={handle1}>{counter1}</button>
      <span>{even ? "Even" : "Odd"}</span>
      <button onClick={handle2}>{counter2}</button>
    </div>
  );
};

export default Memo;
