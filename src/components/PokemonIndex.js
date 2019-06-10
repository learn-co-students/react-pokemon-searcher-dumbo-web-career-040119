import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filter: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      filter: event.target.value
    })
  }

  addPokemon = (obj) => {
    this.setState({
      pokemon: [obj, ...this.state.pokemon]
    })
  }

  render() {
    const pokemonFilter = this.state.pokemon.filter(poke => {
      return poke.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} pokemonFilter={pokemonFilter}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
