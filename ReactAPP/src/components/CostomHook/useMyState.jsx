import { useState } from "react";

export const useMyState = (props) => {
  const [value, setValue] = useState(props);

  const setState = (props) => {
    setValue(props);
  };

  return [value, setState];
};
