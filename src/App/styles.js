import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  height: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  main {
    max-width: 800px;
    display: flex;
    margin: auto;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 0 5px;

    #stopwatch {
      color: #ffffff;
      margin-bottom: 60px;
      width: 700px;
      padding-left: 61px;

      h1 {
        font-weight: normal;
        font-size: 150px;
      }
    }

    #buttons {
      display: flex;
      justify-content: space-between;
      padding: 0 65px;

      div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 115px;
          height: 115px;
          border-radius: 50%;
          font-size: 30px;
          border: 3px solid black;
        }
      }

      div.leftButton {
        &::before {
          z-index: -1;
          position: absolute;
          width: 122px;
          height: 122px;
          border-radius: 50%;
          border: 2px solid black;
          content: '';
          background-color: #333333;
        }

        button {
          background-color: #333333;
          color: #ffffff;
          font-weight: 500;
        }
      }

      div.rightButton {
        &::before {
          z-index: -1;
          position: absolute;
          width: 122px;
          height: 122px;
          border-radius: 50%;
          content: '';
          background-color: #330000;
          border: 2px solid black;
        }

        button {
          background-color: #330000;
          color: #ff6633;
          font-weight: 500;
        }
      }
    }

    #laps {
      padding: 0 65px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 285px;

      p {
        display: flex;
        justify-content: space-between;
        color: ${props => props.lap && props.lap === 'best' ? 'green' : props.lap === 'worse' ? 'red' : '#ffffff'};
        font-size: 25px;
        width: 100%;
        padding: 20px 0;
        border: 1px solid #333333;
        border-left: 0;
        border-right: 0;

        span {
          width: 120px;
          span {
            text-align: left;
            padding-left: 25px;
          }
        }
      }

      p + p {
        border: 1px solid #333333;
        border-left: 0;
        border-right: 0;
        border-top: 0;
      }
    }
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  width: 100%;
  padding: 0 20px;

  .bZeebZ .ps__rail-y {
    background-color: black;
  }
`
