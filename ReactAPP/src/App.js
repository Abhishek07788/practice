import "./App.css";
import { useState } from "react";
import Parent from "./components/forwardRef/Parent";
import StopWatch from "./components/stopwatch/StopWatch";
// import Star from "./components/Star";
// import Momo from ".//components/Memo";
// import UseRef from "./components/UseRef";
// import Ref from "./components/Ref";
// import Practice from "./components/Practice";
// import ButtonA from "./components/HOF/ButtonA";
// import ButtonB from "./components/HOF/ButtonB";
// import Parent from "./components/useCallBack/Parent";
// import ClassComponent from "./components/ClassComponent";

function App() {
  const [hide, setHide] = useState();
  return (
    <div className="App">
      {/* --------- Use Memo ------- */}
      {/* <Momo /> */}
      {/* <Parent /> */}
      <br />
      {/* <ClassComponent /> */}
      {/* <Star /> */}
      <br />
      {/* {hide ? <UseRef /> : "Show Counter"} */}
      <br />
      {/* <Ref />  */}
      <br />
      {/* ----- Forward Ref ---- */}
      {/* <Parent /> */}
      <br />
      {/* <Practice /> */}
      {/* -------HOF---- */}
      {/* <ButtonA name="Button A" /> */}
      <br />
      {/* <ButtonB name="Button B" /> */}
      {/* <button onClick={() => setHide(!hide)}>{hide ? "hide" : "show"}</button> */}
      <StopWatch />
    </div>
  );
}

export default App;
