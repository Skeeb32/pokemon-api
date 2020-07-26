// import React, { useState, useEffect } from 'react';
// import {getAllPokemon, getPokemon} from './services/pokemon'
// import './App.css';

// function App() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [nextUrl, setNextUrl] = useState('');
//   const [prevUrl, setPrevUrl] = useState('');
//   const [loading, setLoading] = useState(true);
//   const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

//   useEffect(() => {
//     async function fetchData() {
//       let response = await getAllPokemon(initialUrl);
//       setNextUrl(response.next);
//       setPrevUrl(response.previous);
//       let pokemon = await loadingPokemon(response.results);
      
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   const loadingPokemon = async (data) => {
//     let _pokemon = await Promise.all(data.map(async pokemon => {
//       let pokemonRecord = await getPokemon(pokemon);
//       return pokemonRecord
//     }))
//   }

//   setPokemonData(_pokemonData)

//   return <div>{loading ? <h1>Loding...</h1> : <h1>Data is fetched</h1>}</div>;
// }

// export default App;

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <DashBoard />
        </div>
      </div>
    )
  }
}

export default App;
