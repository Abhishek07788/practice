import React, { forwardRef } from "react";

const Child = (props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" placeholder="Write Something.." />
    </div>
  );
};

export default forwardRef(Child);
