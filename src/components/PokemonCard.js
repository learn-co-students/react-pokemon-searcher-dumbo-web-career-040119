import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }
  render() {
    const {name, stats,sprites} =this.props.poke
    return (
      <Card>
        <div onClick = {this.handleClick}>
          {
            this.state.front ?
            <div className="image">
            <img src={sprites.front}alt="oh no!" />
            </div>
            :
            <div className="image">
            <img src={sprites.back}alt="oh no!" />
            </div>
          }
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
