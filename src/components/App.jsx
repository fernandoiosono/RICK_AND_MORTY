import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import styled from "styled-components";
import { CharactersContext, FnAddNewCharContext, FnCloseCardContext } from "../js/contexts.js";
import { useState } from "react";

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

  function closeCharCard(idChar) {
    setCharacters((current) =>
      current.filter((char) => char.idChar !== idChar)
    )
  }

  return (
    <CharactersContext.Provider value={characters}>
        <SectionApp>
          <header>
          <FnAddNewCharContext.Provider value={addNewCharacter}>
            <Nav />
          </FnAddNewCharContext.Provider>
          </header>
          <Hr />
          <main>
            <FnCloseCardContext.Provider value={closeCharCard}>
              <Cards characters={characters} />
            </FnCloseCardContext.Provider>
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