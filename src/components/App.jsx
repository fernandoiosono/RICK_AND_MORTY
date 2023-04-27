import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import styled from "styled-components";
import { CharactersContext, FnAddCharContext } from "../js/contexts.js";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [ characters, setCharacters ] = useState([{
    idChar: 2,
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }]);

  function addNewCharacter(char) {
    setCharacters([...characters, char]);
  }

  return (
    <CharactersContext.Provider value={characters}>
        <SectionApp>
          <header>
          <FnAddCharContext.Provider value={addNewCharacter}>
            <Nav />
          </FnAddCharContext.Provider>
          </header>
          <Hr />
          <main>
            <Cards characters={characters} />
          </main>
        </SectionApp>
    </CharactersContext.Provider>
  );
}

const SectionApp = styled.section`
  text-align: center;
  padding: 25px;
`;

const Hr = styled.hr`
  border-top: 3px solid black;
  border-bottom: none;
`;