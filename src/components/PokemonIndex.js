import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonCard from './PokemonCard'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: "",
    sortName: false
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
      })
  }

  addNewPokemon = (pokemon) => {
    this.setState({
      pokemons: [pokemon, ...this.state.pokemons]
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }


handleName = () => {
        this.setState({
            sortName: !this.state.sortName
        })
    this.state.sortName ? this.state.pokemons.sort((a,b) => {
        return (a.name < b.name) ? 1 : -1
    }) : this.state.pokemons.sort((a,b) => {
        return (a.name > b.name) ? 1 : -1
    })
}


  render() {
    return (
      <div>

        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <button onClick={this.handleName}>Sort Pokemons by Name</button>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()))} />

      </div>
    )
  }
}

export default PokemonPage
