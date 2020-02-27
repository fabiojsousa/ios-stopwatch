import React, { useState, useEffect } from "react";

import { Container } from "./styles";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [newInterval, setNewInterval] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [duration, setDuration] = useState(format(timeElapsed));
  const [startTime, setStartTime] = useState();
  const [timer, setTimer] = useState();
  const [lap, setLap] = useState([]);

  useEffect(() => {
    if (newInterval && isRunning) {
      setTimer(
        setInterval(() => {
          const tElapsed =
            timeElapsed > 0
              ? Date.now() - startTime + timeElapsed
              : Date.now() - startTime;
          setTimeElapsed(tElapsed);
        }, 10)
      );
      setNewInterval(false);
    }
  }, [isRunning, newInterval, timeElapsed, startTime]);

  useEffect(() => {
    setDuration(format(timeElapsed));
  }, [timeElapsed]);

  function start() {
    setIsRunning(true);
    setStartTime(Date.now());
    setNewInterval(true);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(timer);
  }

  function reset() {
    clearInterval(timer);
    setTimeElapsed(0);
    setLap([]);
    setIsRunning(false);
    setNewInterval(true);
  }

  function format(time) {
    const allSec = time / 1000;
    const min = Math.floor(allSec / 60);
    const sec = Math.floor(allSec % 60);
    const msec = (allSec % 1).toFixed(2).substring(2);

    return {
      total: time,
      minutes: min >= 10 ? min : `0${min}`,
      seconds: sec >= 10 ? sec : `0${sec}`,
      miliseconds: msec
    };
  }

  function createNewLap() {
    setLap([format(timeElapsed), ...lap]);
  }

  return (
    <Container>
      <div id="chronometer">
        <h2>
          {duration.minutes}:{duration.seconds}.{duration.miliseconds}
        </h2>
      </div>
      <div>
        <button type="button" onClick={isRunning ? createNewLap : reset}>
          {isRunning ? "Lap" : timeElapsed > 0 ? "Reset" : "Lap"}
        </button>
        <button type="button" onClick={isRunning ? stop : start}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div id="laps">
        {lap.map(l => (
          <p key={l.total}>
            {l.minutes}:{l.seconds}.{l.miliseconds}
          </p>
        ))}
      </div>
    </Container>
  );
}
