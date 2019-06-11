import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "height": 4,
        "weight": 40,
        "id": 1,
        "name": this.state.name,
        "abilities": [
          "synchronize"
        ],
        "moves": [
          "pound",
          "mega-punch",
          "pay-day",
          "razor-wind",
          "whirlwind",
          "fly",
          "mega-kick",
          "horn-drill",
          "bubble-beam",
          "submission"
        ],
        "stats": [
          {
            "value": 100,
            "name": "speed"
          },
          {
            "value": 100,
            "name": "special-defense"
          },
          {
            "value": 100,
            "name": "special-attack"
          },
          {
            "value": 100,
            "name": "defense"
          },
          {
            "value": 100,
            "name": "attack"
          },
          {
            "value": this.state.hp,
            "name": "hp"
          }
        ],
        "types": [
          "psychic"
        ],
        "sprites": {
          "front": this.state.frontUrl,
          "back": this.state.backUrl
        }
      })
    })
    .then(res => res.json())
    .then(data => this.props.addNewPokemon(data))
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
