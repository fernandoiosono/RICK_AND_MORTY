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
    <section className='App' style={{ padding: '25px' }}>
      <header>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </header>

      <hr />

      <main>
        <Card args={cardProps} />
        
        <hr />

        <Cards characters={characters} />
      </main>
    </section>
  );
}