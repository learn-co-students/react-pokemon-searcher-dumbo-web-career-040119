import React, {Fragment} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search, Button } from 'semantic-ui-react'
import _ from 'lodash'

const URL = `http://localhost:3000/pokemon`

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: '',
    addPokemon: false,
    loading: false
  }

  formatPokemon = (pokemon) => {
    return this.filter(pokemon)
  }

  filter = (pokemon) => {
    return pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm))
  }

  componentDidMount = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon,
        loading: true
      })
    })
  }
  
  handleAddPokemon = (newPokemon) => {
    // console.log(newPokemon)
    // console.log(...this.state.pokemon)
    // debugger
    const {height, weight, id, name, abilities, moves, stats, types, sprites} = newPokemon
    fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        height: height,
        weight: weight,
        id: id,
        name: name,
        abilities: abilities,
        moves: moves,
        stats: stats,
        types: types,
        sprites: sprites
      })
    })
    .then(res => res.json())
    .then(newPoke => {
      this.setState({
      pokemon: [newPoke, ...this.state.pokemon]
     })
    })
  
    // this.setState({
    //   pokemon: [newPokemon, ...this.state.pokemon]
    // })
}

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleClick = () => {
    this.setState({
      addPokemon: !this.state.addPokemon
    })
  }

  render() {
    // console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleChange} showNoResults={false} />
        <br />
        <Button onClick={this.handleClick} positive>Add Pokemon</Button>
        <br/>
        {/* <Button onClick={this.handleSortByName}>Sort By Name</Button> */}
        {/* <Button onClick={this.handleSortByHP}>Sort By HP</Button> */}
        {this.state.loading ?

        <Fragment>
          {
            this.state.addPokemon ?
            <PokemonForm handleClick={this.handleClick} handleAddPokemon={this.handleAddPokemon} />
            :
            <PokemonCollection pokemon = {this.formatPokemon(this.state.pokemon)} />
          }
        </Fragment>
        :
        <Fragment>
          <h1>Loading...</h1>
        </Fragment>
      
        }
        {/* <PokemonCollection pokemon = {this.formatPokemon(this.state.pokemon)} />
        <br />
        <PokemonForm /> */}
      </div>
    )
  }
}

export default PokemonPage
