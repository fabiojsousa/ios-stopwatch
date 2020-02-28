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
  const [lapPlaceholder, setLapPlaceholder] = useState([]);
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
  }, [isRunning, newInterval, timeElapsed, startTime]);

  useEffect(() => {
    setDuration(format(timeElapsed));
  }, [timeElapsed]);

  useEffect(() => {
    let arr = [];

    for (let i = 0; i < 4 - lap.length; i++) {
      arr.push('');
    }
    setLapPlaceholder(arr);
  }, [lap]);

  useEffect(() => {
    console.log(bestWorseLap)
  }, [bestWorseLap]);

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
      totalTime: allSec,
      minutes: min >= 10 ? min : `0${min}`,
      seconds: sec >= 10 ? sec : `0${sec}`,
      miliseconds: msec,
    };
  }

  function createNewLap() {
    setLap([{ index: lap.length + 1, time: format(timeElapsed) }, ...lap]);

    const { totalTime } = format(timeElapsed);

    if (lap.length === 0)
      setBestWorseLap({ best: totalTime, worse: totalTime });
    else if (lap.totalTime <= bestWorseLap.best) {
      setBestWorseLap({ best: lap.totalTime, worse: bestWorseLap.worse });
    } else if (lap.totalTime >= bestWorseLap.worse)
      setBestWorseLap({ best: bestWorseLap.best, worse: lap.totalTime });
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
            {lap.length > 0 &&
              lap.map(l => (
                <p
                  key={l.index}
                  lap={
                    lap.length >= 3 && l.totalTime <= bestWorseLap.best
                      ? 'best'
                      : l.totalTime >= bestWorseLap.worse
                      ? 'worse'
                      : 'normal'
                  }
                >
                  <span>Lap {l.index}</span>
                  <span>
                    {l.time.minutes}:{l.time.seconds}.{l.time.miliseconds}
                  </span>
                </p>
              ))}

            {lap.length < 4 &&
              lapPlaceholder.map(p => (
                <p key={Math.random()}>
                  <span>Lap</span>
                  <span>time</span>
                </p>
              ))}
          </Scroll>
        </div>
      </main>
    </Container>
  );
}
