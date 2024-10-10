import React, { useState } from "react";

function Stopwatch() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  var [timer, setTimer] = useState();

  const Start = () => {
    if (!start) {
      setStart(true);
      setTimer(
        setInterval(() => {
          setTime((e) => e + 1);
        }, 1000)
      );
    }
  };
  const Stop = () => {
    if (start) {
      setStart(false);
      clearInterval(timer);
      clearTimeout(timer);
    }
  };

  const Reset = () => {
    clearInterval(timer);
    setStart(false);
    setTime(0);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div class="stopwatch-container">
      <h1>StopWatch</h1>
      <p>
        {minutes}m {seconds}s
      </p>

      <button className="start" onClick={Start}>start</button>
      <button className="stop" onClick={Stop}>stop</button>
      <button className="reset" onClick={Reset}>reset</button>
    </div>
  );
}

export default Stopwatch;
