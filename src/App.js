import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'

export default function App () {
  const cardProps = {
    name: Rick.name,
    species: Rick.species,
    gender: Rick.gender,
    image: Rick.image
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
          args={cardProps}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  );
}