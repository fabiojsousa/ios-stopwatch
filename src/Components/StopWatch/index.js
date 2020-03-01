import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import format from '../../services/format';
import Laps from './Laps';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [newInterval, setNewInterval] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [duration, setDuration] = useState(format(timeElapsed));
  const [startTime, setStartTime] = useState();
  const [timer, setTimer] = useState();
  const [lap, setLap] = useState([]);
  const [newLap, setNewLap] = useState(0);
  const [bestWorseLap, setBestWorseLap] = useState();

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
  }, [isRunning, newInterval]);

  useEffect(() => {
    setDuration(format(timeElapsed));
  }, [timeElapsed]);

  useEffect(() => {
    const nLap = newLap + 10;
    timeElapsed && setNewLap(nLap);
  }, [timeElapsed]);

  useEffect(() => {
    //infinity number
    let bestLap = 1797693134862315e308;
    let worseLap = 0;

    let bestIndex, worseIndex;

    if (lap.length > 2) {
      lap.forEach(l => {
        const { totalTime } = l.time;

        if (totalTime <= bestLap) {
          bestLap = totalTime;
          bestIndex = l.index;
        }

        if (totalTime >= worseLap) {
          worseLap = totalTime;
          worseIndex = l.index;
        }
      });
    }

    setBestWorseLap({
      best: { time: bestLap, index: bestIndex },
      worse: { time: worseLap, index: worseIndex },
    });
  }, [lap]);

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

  function createNewLap() {
    setLap([{ index: lap.length + 1, time: format(newLap) }, ...lap]);
    setNewLap(0);
  }

  return (
    <Container running={isRunning && 'on'} reseted={timeElapsed > 0 && 'no'}>
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
          <Laps
            timeElapsed={timeElapsed}
            lap={lap}
            newLap={newLap}
            bestWorseLap={lap.length > 1 && bestWorseLap}
          />
        </div>
      </main>
    </Container>
  );
}
