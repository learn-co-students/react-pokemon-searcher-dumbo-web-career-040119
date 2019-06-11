import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchInput: "",
    sortName: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemon: data
    }))
  }

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  filter = () => {
    return this.state.pokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
  }

  addNewPoke = (newPoke) => {
    this.setState({
      pokemon: [newPoke, ...this.state.pokemon]
    })
  }

  handleClick = (event) => {
    this.setState({
      sortName: !this.state.sortName
    })
    this.state.sortName ? this.state.pokemon.sort((a,b) => {
      return (a.name < b.name) ? 1 : -1
    }) :
    this.state.pokemon.sort((a,b)=> {
      return (a.name > b.name) ? 1 : -1
    })
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <button onClick={this.handleClick}>Sort by Name</button>
        <br />
        <PokemonCollection pokemon={this.filter()}/>
        <br />
        <PokemonForm addNewPoke={this.addNewPoke}/>
      </div>
    )
  }
}

export default PokemonPage
