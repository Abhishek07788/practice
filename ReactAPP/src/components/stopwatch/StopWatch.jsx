import React, { useRef, useState } from "react";

const formatTime = (time) => (time < 10 ? "0" + time : time);

const handleTime = (time) => {
  const mil = Math.floor(time % 60);
  const sec = Math.floor((time / 60) % 60);
  const min = Math.floor(time / (60 * 60));
  return `${formatTime(min)}:${formatTime(sec)}:${formatTime(mil)}`;
};

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const ref = useRef(null);

  const handleStart = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 16.5);
  };

  const handleStop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <h1>{handleTime(time)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
