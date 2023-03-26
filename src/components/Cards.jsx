import Card from './Card';

export default function Cards(props) {
   const { characters } = props;

   return (
      <div>{
         characters.map( c =>
            <Card key={c.id}
               args={{
                  name: c.name,
                  species: c.species,
                  gender: c.gender,
                  image: c.image }} />
         )
      }</div>
   );
}
