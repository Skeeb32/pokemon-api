import React, { Component } from 'react'
import axios from 'axios'


export default class Pokemon extends Component {

    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        // name: '',
    }

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;


    // URL for pokemon Information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`

    // Get Pokemon Information
    const pokemonRes = await axios.get(pokemonUrl);   
    
    const name = pokemonRes.data.name;
    this.setState({ name })
}



    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
