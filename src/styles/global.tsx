import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body,
    html{
        margin: 0;
        padding: 0;
        background: #202124;
    }

    body::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
      }
      
      body::-webkit-scrollbar-track {
        background: #22272e;        /* color of the tracking area */
      }
      
      body::-webkit-scrollbar-thumb {
        background-color: #a1a1a1;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 2px solid #22272e;  /* creates padding around scroll thumb */
      }

    *{
        box-sizing: content-box;
        transition: 0.3s ease-in-out;
    }
`;

export default GlobalStyle