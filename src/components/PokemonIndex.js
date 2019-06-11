import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search, Button } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  postPokemon = (poke) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: poke.name.toLowerCase(),
        sprites: {front: poke.frontUrl, back: poke.backUrl},
        stats: [
          {},
          {},
          {},
          {},
          {},
          {value: 100}
        ]
      })
    })
    .then(res => res.json())
    .then(this.updatePokemon)
  }

  updatePokemon = (pokemon) => {
    this.setState({
    pokemon: [...this.state.pokemon, pokemon]
    })
  }

  handleSearchChange = (event) => {
    this.state.pokemon.filter(pokemon => pokemon.name.includes(event.target.value))
    this.setState({searchTerm: event.target.value})
  }

  filter = () => this.state.pokemon.filter(poke => poke.name.includes(this.state.searchTerm))


  sort = (event) => {
    let sortedPokemon;
    switch(event.target.id){
      case "name":
       sortedPokemon = [...this.state.pokemon].sort((a, b) => (a.name > b.name) ? 1 : -1)
      break;
      case "id":
       sortedPokemon = [...this.state.pokemon].sort((a, b) => (a.id > b.id) ? 1 : -1)
       console.log(this.state.pokemon)
      break;
      case "hp":
       sortedPokemon = [...this.state.pokemon].sort((a, b) => (a.stats[5].value > b.stats[5].value) ? 1 : -1)
      break;
    }
    this.setState({pokemon: sortedPokemon})
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(fetchedPokemon => {
      this.setState({
        pokemon: fetchedPokemon
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <div className="button-container">
          <Button onClick={this.sort} id="name" content="Sort By Name"/>
          <br />
          <Button onClick={this.sort} id="hp" content="Sort By HP"/>
          <br />
          <Button onClick={this.sort} id="id" content="Sort By ID"/>
          <br />
        </div>
        <br />
        <br />
        <PokemonForm postPokemon={this.postPokemon} />
        <br />
        <br />
        <PokemonCollection allPokemon={this.filter()} />
        <br />
      </div>
    )
  }
}

export default PokemonPage
