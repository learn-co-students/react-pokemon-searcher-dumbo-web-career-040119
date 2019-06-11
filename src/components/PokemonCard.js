import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    click: true
  }

  toggle = () => {
    this.setState({
      click: !this.state.click
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggle}>
          {this.state.click ? <img src={this.props.pokemon.sprites.front} alt="oh no!" /> : <img src={this.props.pokemon.sprites.back} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
