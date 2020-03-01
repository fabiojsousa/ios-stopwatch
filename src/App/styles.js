import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  margin: 0 auto;

  main {
    max-width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;


    #stopwatch {
      color: #ffffff;
      margin-bottom: 60px;
      text-align: center;
      /* padding-left: 15px; */

      h1 {
        font-weight: normal;
        font-size: 85px;
      }
    }

    #buttons {
      display: flex;
      justify-content: space-between;
      padding: 0 35px;

      div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid black;
        }
      }

      div.leftButton {
        button {
          background-color: ${props => props.reseted === 'no' ? '#333333' : '#1C1C1E'};
          color: ${props => props.reseted === 'no' ? '#ffffff' : '#999999'};
          font-weight: 500;
          box-shadow: 0px 0px 0px 2px ${props => props.reseted === 'no' ? '#333333' : '#1C1C1E'} ;

          :active {
          background-color: ${props => props.reseted === 'no' ? '#1B1B1B' : '#0F0F11'};
            box-shadow: 0px 0px 0px 2px ${props => props.reseted === 'no' ? '#1B1B1B' : '#0F0F11'};
          }
        }
      }

      div.rightButton {
        button {
          background-color: ${props => props.running === 'on' ? '#330000' : '#003300'};
          color: ${props => props.running === 'on' ? '#cc6633' : '#66cc66'};
          font-weight: 500;
          box-shadow: 0px 0px 0px 2px ${props => props.running === 'on' ? '#330000' : '#003300'};
        }
      }
    }

    #laps {
      width: 400px;
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
        width: 100%;
        padding: 10px 0;
        border: 1px solid #333333;
        border-left: 0;
        border-right: 0;

        span {
          height: 17px;
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
  padding: 0 35px;
`
