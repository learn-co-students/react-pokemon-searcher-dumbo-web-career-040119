import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.allPokemon.map(poke =>
          <PokemonCard pokemon={poke} name={poke.name} front={poke.sprites.front} back={poke.sprites.back} hp={poke.stats[5].value}/>
        )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
