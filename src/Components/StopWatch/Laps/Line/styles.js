import styled from 'styled-components';

export const Container = styled.div`
  p {
    color: ${props => {
      const { lap, index: i, bestWorseLap } = props;

      let color;

      if (lap.length > 1 && lap[i]) {
        const { time: bestTime, index: bestIndex } = bestWorseLap.best;
        const { time: worseTime, index: worseIndex } = bestWorseLap.worse;

        if (lap[i].index === bestIndex && lap[i].time.totalTime === bestTime){
          color = '#3FB95D';
        }
        else if (
          lap[i].index === worseIndex &&
          lap[i].time.totalTime === worseTime
        ) {
          color = '#B93932';
        }
      }

      return color;
    }};
  }
`;
