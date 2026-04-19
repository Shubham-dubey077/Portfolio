import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [run]);

  return (
    <div>
      <h2>{time}s</h2>
      <button onClick={() => setRun(true)}>Start</button>
      <button onClick={() => setRun(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default Stopwatch;