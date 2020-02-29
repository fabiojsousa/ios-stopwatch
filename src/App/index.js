import React, { useState, useEffect } from 'react';

import { Container, Scroll } from './styles';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [newInterval, setNewInterval] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [duration, setDuration] = useState(format(timeElapsed));
  const [startTime, setStartTime] = useState();
  const [timer, setTimer] = useState();
  const [lap, setLap] = useState([]);
  const [newLap, setNewLap] = useState(0);

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
  }, [isRunning, newInterval, timeElapsed, startTime, newLap]);

  useEffect(() => {
    setDuration(format(timeElapsed));
  }, [timeElapsed]);

  useEffect(() => {
    const nLap = newLap + 10;
    timeElapsed && setNewLap(nLap);
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
    setNewLap(0);
    setIsRunning(false);
    setNewInterval(true);
  }

  function format(time) {
    const allSec = time / 1000;
    const min = Math.floor(allSec / 60);
    const sec = Math.floor(allSec % 60);
    const msec = (allSec % 1).toFixed(2).substring(2);

    let allData = {
      totalTime: allSec,
      minutes: min >= 10 ? min : `0${min}`,
      seconds: sec >= 10 ? sec : `0${sec}`,
      miliseconds: msec,
    };

    allData.formatedTime = `${allData.minutes}:${allData.seconds}:${allData.miliseconds}`;

    return allData;
  }

  function createNewLap() {
    setLap([{ index: lap.length + 1, time: format(newLap) }, ...lap]);
    setNewLap(0)
  }

  return (
    <Container>
      <main>
        <div id="stopwatch">
          <h1>
            {duration.minutes}:{duration.seconds}.{duration.miliseconds}
          </h1>
        </div>
        <div id="buttons">
          <div className="leftButton">
            <button type="button" onClick={isRunning ? createNewLap : reset}>
              {isRunning ? 'Lap' : timeElapsed > 0 ? 'Reset' : 'Lap'}
            </button>
          </div>
          <div className="rightButton">
            <button type="button" onClick={isRunning ? stop : start}>
              {isRunning ? 'Stop' : 'Start'}
            </button>
          </div>
        </div>

        <div id="laps">
          <Scroll option={{ maxScrollbarLength: 80 }}>
            <p>
              <span>{timeElapsed > 0 && `Lap ${lap.length + 1}`}</span>
              <span>
                <span>
                  {timeElapsed > 0 && format(newLap).formatedTime}
                </span>
              </span>
            </p>
            <p>
              <span>{lap[0] && `Lap ${lap[0].index}`}</span>
              <span>
                <span>{lap[0] && `${lap[0].time.formatedTime}`}</span>
              </span>
            </p>
            <p>
              <span>{lap[1] && `Lap ${lap[1].index}`}</span>
              <span>
                <span>{lap[1] && `${lap[1].time.formatedTime}`}</span>
              </span>
            </p>
            <p>
              <span>{lap[2] && `Lap ${lap[2].index}`}</span>
              <span>
                <span>{lap[2] && `${lap[2].time.formatedTime}`}</span>
              </span>
            </p>
          </Scroll>
        </div>
      </main>
    </Container>
  );
}
