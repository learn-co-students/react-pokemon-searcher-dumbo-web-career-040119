import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    front: true
  }

  handleFlip = () => {
    this.setState({
      front: !this.state.front
    })
  }


  render() {
    // console.log(this.state);
    const {sprites, name, stats} = this.props.poke
    // console.log(this.props.poke);
    return (
      <Card onClick={this.handleFlip}>
        <div>
          {
            this.state.front ?
          <div className="image">
            <img src={sprites.front} alt="oh no!" />
          </div>
          :
          <div className="image">
            <img src={sprites.back} alt="oh no!" />
          </div>
        }
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
