import React from "react";
import { useMyState } from "../CostomHook/useMyState";

const Hof = (Component, num) => {
  const HofCounter = (props) => {
    const [count, setCount] = useMyState(0);
    const handleClick = () => {
      setCount(count + num);
    };
    return (
      <div>
        <Component handleClick={handleClick} count={count} {...props} />
      </div>
    );
  };

  return HofCounter;
};

export default Hof;
