import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
        height: 10,
        weight: 130,
        id: 1,
        name: '',
        abilities: ["overgrow", "chlorophyll"],
        moves: [],
        stats: [],
        types: ["grass", "poison"],
        sprites: {
          front: '',
          back: ''    
        }
      }
  }
  handleNameChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddPokemon(this.state)
    this.props.handleClick()
  }

  handleHpChange = (e) => {
    this.setState({
      stats: [
        {
          "value": 80,
          "name": "special-defense"
        },
        {
          "value": 80,
          "name": "special-attack"
        },
        {
          "value": 63,
          "name": "defense"
        },
        {
          "value": 62,
          "name": "attack"
        },
        {
          "value": 60,
          "name": "speed"
        },
        {
          "value": parseInt(e.target.value),
          "name": "hp"
        }
      ]
    })
  }

  handleSpriteFrontChange = (e) => {
    this.setState({
      sprites: {
        ...this.state.sprites, front: e.target.value
      }
    })
  }

  handleSpriteBackChange = (e) => {
    this.setState({
      sprites: {
        ...this.state.sprites, back: e.target.value
      }
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange = {this.handleNameChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange = {this.handleHpChange} fluid label="hp" placeholder="hp" name="value" />
            <Form.Input onChange = {this.handleSpriteFrontChange} fluid label="Front Image URL" placeholder="url" name="front" />
            <Form.Input onChange = {this.handleSpriteBackChange} fluid label="Back Image URL" placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
