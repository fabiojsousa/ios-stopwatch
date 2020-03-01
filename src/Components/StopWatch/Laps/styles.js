import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;

  p {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    width: 100%;
    padding: 10px 0;
    border: 1px solid #333333;
    border-left: 0;
    border-right: 0;

    span {
      height: 17px;
    }
  }
  div + div {
    p {
      border: 1px solid #333333;
      border-left: 0;
      border-right: 0;
      border-top: 0;
    }
  }

  .first-line {
    border-bottom: 0;
  }

  #lap-duration {
    width: 60px;

    span {
      padding-left: 6px;;
    }
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  width: 100%;
  padding: 0 20px;
`;
