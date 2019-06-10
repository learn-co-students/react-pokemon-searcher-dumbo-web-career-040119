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

  nameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  hpChange = (event) => {
    this.setState({
      hp: event.target.value
    })
  }
  frontChange = (event) => {
    this.setState({
      frontUrl: event.target.value
    })
  }
  backChange = (event) => {
    this.setState({
      backUrl: event.target.value
    })
  }

  handleSubmit = (event) => {
    // console.log("hi");
    event.preventDefault()

    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{},{},{},{},{},{value: this.state.hp, name: "hp"}],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
        })
      })
      .then(res => res.json())
      .then((data) => {
        debugger
        this.props.addPokemon(data)
      })

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.nameChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.hpChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.frontChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.backChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
