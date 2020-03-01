import React from 'react';

import { Container } from './styles';

export default function Line({ index, lap, bestWorseLap }) {
  return (
    <Container index={index} lap={lap} bestWorseLap={bestWorseLap}>
      <p>
        <span>{lap[index] && `Lap ${lap[index].index}`}</span>
        <span>{lap[index] && `${lap[index].time.formatedTime}`}</span>
      </p>
    </Container>
  );
}
