import React from 'react'
import { Card } from 'semantic-ui-react'




class PokemonCard extends React.Component {

  state = {
    flipCard: false
  }

  handleClick = () => {
    this.setState({
      flipCard: !this.state.flipCard
    })
  }
  render() {

    return (
      this.state.flipCard ?
      <Card >
        <div onClick={this.handleClick}>
        <img  alt="oh no!" src={this.props.pokemon.sprites.back}/>
        </div>
      </Card> :
      <Card>
        <div>
          <div onClick={this.handleClick} className="image">
            <img alt="oh no!" src={this.props.pokemon.sprites.front}/>
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
