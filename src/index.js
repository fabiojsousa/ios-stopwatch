import React from 'react';
import ReactDOM from 'react-dom';

import StopWatch from './Components/StopWatch';
import Global from './styles/global';

ReactDOM.render(
  <>
    <Global />
    <StopWatch />
  </>,
  document.getElementById('root')
);
