import styled from "styled-components"

export const Header = styled.header`
    background-color: white;
    width: 100vw;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    border-radius: 0px 0px 15px 15px;

    button{
        padding: 5px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        font-size: 1em;
        color: red;
        border: none;
        border-bottom: 2px solid;
        background: transparent;
        transition: .4s all ease-in;
    }

    button:active{
        transform: scale(.95);
    }
`;
