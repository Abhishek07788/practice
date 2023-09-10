import React from "react";
import Hof from "./Hof";

const ButtonA = (props) => {
  const {handleClick, count, name} = props;
 
  return <button onClick={handleClick}>{name} {count} Click</button>;
};

export default Hof(ButtonA, 5);
