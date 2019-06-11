import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state={
    pokemon: [],
    searchInput: "",
    sort: false
  }
  componentDidMount = () => {
     fetch(URL)
     .then(resp => resp.json())
     .then(pokemon => {
       this.setState({
         pokemon: pokemon
       })
     })
   }

  handleOnSearchChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
    console.log(event.target.value);
  }

  newFilteredValue = () => this.state.pokemon.filter(poke => {
    return poke.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
  })


addPokemon = (newPoke) => {
  this.setState({
    pokemon: [newPoke, ...this.state.pokemon]
  })
}

  handleSort = (event) => {
    this.setState({
      sort: !this.state.sort
    })
    this.state.sort ? this.state.pokemon.sort((a,b) => {
      return (a.name < b.name) ? 1: -1
    })
    :
    this.state.pokemon.sort((a,b) => {
      return (a.name > b.name) ? 1: -1
    })
}

  render() {
    // console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleOnSearchChange} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <button onClick={this.handleSort}>Sort by Name</button>
        <br />
        <PokemonCollection pokemon={this.newFilteredValue()}/>
        <br />
      </div>
    )
  }
}

export default PokemonPage
