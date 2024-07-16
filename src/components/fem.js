import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2em;

  width: 100vw;
  max-width: 100vw;
  background-color: crimson;
  border-radius: 5px 5px 0 0;
  text-align: center;
  box-sizing: border-box;

  img {
    width: 15vw;
    border-radius: 5px;
  }
`;


export const MainImgs = styled.section`
margin-top: 2em;
  display: grid;
  place-items: center;
  grid-auto-columns: 1fr;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 2fr auto;
  gap: 50px 0px;
  grid-template-areas:
    ". . . . ."
    ". . . . .";
`;
