import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import About from "./About.jsx";
import CardDetail from "./CardDetail.jsx";
import PageNotFound from "./PageNotFound.jsx";

import { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { CharactersContext, FnAddNewCharContext, FnCloseCardContext } from "../js/contexts.js";

const App = () => {
  const [ characters, setCharacters ] = useState([]);

  const addNewCharacter = (char) => {
    setCharacters([...characters, char]);
  };

  const closeCharCard = (idChar) => {
    setCharacters((current) =>
      current.filter((char) => char.idChar !== idChar)
    )
  };

  return (
    <SectionApp>
      <header>
        <CharactersContext.Provider value={characters}>
          <FnAddNewCharContext.Provider value={addNewCharacter}>
            <Nav />
          </FnAddNewCharContext.Provider>
        </CharactersContext.Provider>
        <Hr />
      </header>
      <main>
        <FnCloseCardContext.Provider value={closeCharCard}>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Cards characters={characters} />} />
            <Route path="/about" element={<About />} />
            <Route path="/carddetail/:id/:name/:species/:gender" element={<CardDetail />} />
          </Routes>
        </FnCloseCardContext.Provider>
      </main>
    </SectionApp>
  );
};

const SectionApp = styled.section`
  text-align: center;
  padding: 25px;
`;

const Hr = styled.hr`
  border-top: 2px solid black;
  border-bottom: none;
`;

export default App;