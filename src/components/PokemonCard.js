import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  // const { name, stats, sprites, isClicked } = this.props.pokemon
  // const url = isClicked ? sprites.back : sprites.front
  // const hp = stats.find(s => s.name === 'hp').value || 50
  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    console.log(this.props.pokemon)
    const { name, stats } = this.props.pokemon

    const hp = stats.find(s => s.name === 'hp').value || 50


    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={ this.state.isClicked ?
                       this.props.pokemon.sprites.back :
                       this.props.pokemon.sprites.front} alt={this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
