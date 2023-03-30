import Card from "./Card";
import styled from "styled-components";

export default function Cards(props) {
   const { characters } = props;

   return (
      <SectionCards>{
         characters.map( c =>
            <Card key={c.id}
               args={{
                  name: c.name,
                  species: c.species,
                  gender: c.gender,
                  image: c.image }} />
         )
      }</SectionCards>
   );
}

const SectionCards = styled.section`
  display: flex; 
  justify-content: center;
  width: 100%;
`;