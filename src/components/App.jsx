import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import styled from "styled-components";
import { CharactersContext, FuncSearch } from "../js/contexts.js";
// import { useEffect, useState, useContext } from "react";
import { useState } from "react";

export default function App() {
  const [ characters, setCharacters ] = useState([{
    idChar: 2,
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }]);

  function onSearch(data) {
    // let arrChars = characters;
    // arrChars.push(data);
    // setCharacters(arrChars);

    console.log(characters);
  }

  return (
    <CharactersContext.Provider value={characters}>
      <FuncSearch.Provider value={onSearch}>
        <SectionApp>
          <header>
            {/* <Nav onSearch={onSearch}/> */}
            <Nav />
          </header>
          <Hr />
          <main>
            <Cards characters={characters} />
          </main>
        </SectionApp>
      </FuncSearch.Provider>
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