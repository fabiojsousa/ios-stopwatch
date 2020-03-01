import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: #000000;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
