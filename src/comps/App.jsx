import Card from "./Card.jsx";
import Cards from "./Cards.jsx";
import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";
import characters, { Rick } from "../data/data.js";

export default function App() {
  const cardProps = {
    name: Rick.name,
    species: Rick.species,
    gender: Rick.gender,
    image: Rick.image
  };

  return (
    <SectionApp>
      <HeaderSearch>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </HeaderSearch>
      <Hr />
      <main>
        <DivPrincipalCard>
          <Card args={cardProps} />
        </DivPrincipalCard>
        <Hr />
        <Cards characters={characters} />
      </main>
    </SectionApp>
  )
}

const DivPrincipalCard = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SectionApp = styled.section`
  text-align: center;
  padding: 25px;
`;

const HeaderSearch = styled.header`
  float: right;
`;

const Hr = styled.hr`
  border-top: 3px solid black;
  border-bottom: none;
`;