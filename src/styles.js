import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    margin: 0 auto;
    min-width: 100px;
    align-items: center;
    justify-content: center;
    button {
      padding: 5px 8px;
    }
    button + button {
      margin-left: 10px;
    }
  }

  #laps {
    display: block;
  }
`;
