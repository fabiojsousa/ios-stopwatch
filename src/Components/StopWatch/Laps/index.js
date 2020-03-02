import React from 'react';
import PropTypes from 'prop-types';

import { Container, Scroll } from './styles';
import Line from './Line';
import format from '~/services/format';

export default function Laps({ timeElapsed, lap, newLap, bestWorseLap }) {
  return (
    <Container>
      <Scroll>
        <p className="first-line">
          <span>{timeElapsed > 0 && `Lap ${lap.length + 1}`}</span>
          <span id="lap-duration">
            {timeElapsed > 0 && <span>{format(newLap).formatedTime}</span>}
          </span>
        </p>
        <Line index="0" lap={lap} bestWorseLap={bestWorseLap} />
        <Line index="1" lap={lap} bestWorseLap={bestWorseLap} />
        <Line index="2" lap={lap} bestWorseLap={bestWorseLap} />

        {lap.length > 3 &&
          lap.map(
            (l, lIndex) =>
              lIndex > 2 && (
                <Line
                  key={l.index}
                  index={lIndex}
                  lap={lap}
                  bestWorseLap={bestWorseLap}
                />
              )
          )}
      </Scroll>
    </Container>
  );
}

Laps.propTypes = {
  timeElapsed: PropTypes.number,
  lap: PropTypes.array,
  newLap: PropTypes.number,
  bestWorseLap: PropTypes.object,
};
