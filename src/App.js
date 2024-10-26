import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isListView, setIsListView] = useState(true);

  function handleChange(e) {
    setIsListView(!isListView);
  }

  const fetchRandomPokemons = async () => {
    console.log(isListView);
    const randomPokemonPromises = [];

    for (let i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * 1118) + 1;
      const url = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
      randomPokemonPromises.push(axios.get(url));
    }

    try {
      const responses = await Promise.all(randomPokemonPromises);
      setPokemons(responses.map(response => response.data));
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  return (
    <div>
      <header className='App-Header'>
        <div className="App-Title">Pokemon Gacha</div>
        <label className="App-ToggleView">
          <input type="checkbox"></input>
          <span>List View</span>
        </label>
        <button className="App-FetchButton" onClick={fetchRandomPokemons}>Pull!</button>
      </header> 

      <div className='App-Body'>

      </div>

      <footer className='App-Footer'>
        Used the API <a href="https://pokeapi.co/docs/v2">PokeAPI</a>
      </footer>
    </div>
  );
}

export default App;
