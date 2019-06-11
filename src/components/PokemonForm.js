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
    event.preventDefault();
    fetch('http://localhost:3000/pokemon', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "height": 20,
        "weight": 1000,
        "name": this.state.name,
        "abilities": ["overgrow", "chlorophyll"],
        "moves": [],
        "stats": [
          {
            "value": 100,
            "name": "special-defense"
          },
          {
            "value": 100,
            "name": "special-attack"
          },
          {
            "value": 83,
            "name": "defense"
          },
          {
            "value": 82,
            "name": "attack"
          },
          {
            "value": 80,
            "name": "speed"
          },
          {
            "value": this.state.hp,
            "name": "hp"
          }
        ],
        "types": ["grass", "poison"],
        "sprites": {
          "front": this.state.frontUrl,
          "back": this.state.backUrl
        }
      })
    }).then(response => response.json())
    .then(pokemon => this.props.addNewPoke(pokemon))

  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
