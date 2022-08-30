import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-size: 100%;
        }
        body {
            font-family: 'Poppins', sans-serif;
        }
        a, a:hover, a:focus, a:active {
            text-decoration: none;
            color: inherit;
        }
        li {
            list-style: none;
        }
        ul {
            padding: 0;
        }
`;
