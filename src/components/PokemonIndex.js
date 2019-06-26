import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemonCollection: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonCollection => this.setState({ pokemonCollection: pokemonCollection }))
      .catch(e => console.error(e))
  }

  handleSearchChange = (event, object) => {
    const value = object.value
    this.setState({ searchTerm: value })
  }

  addPokemon = pokemon => {
    this.setState({ pokemonCollection: [...this.state.pokemonCollection, pokemon] })
  }

  render() {
    const desiredPokemon = this.state.pokemonCollection.filter(p =>
      p.name.includes(this.state.searchTerm)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={desiredPokemon} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
