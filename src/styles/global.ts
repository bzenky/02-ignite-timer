import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
    }

    body {
        background: ${({ theme }) => theme['gray-900']};
        color: ${({ theme }) => theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: #323238 #202024;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background: #202024;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #323238;
        border-radius: 10px;
        border: 3px solid #323238;
    }
`
