import React from "react";
import Hof from "./Hof";

const ButtonB = (props) => {
  const { count, handleClick, name } = props;

  return (
    <div>
      <button onMouseMove={handleClick}>
        {name} {count} On Hover
      </button>
    </div>  
  );
};

export default Hof(ButtonB, 3);
