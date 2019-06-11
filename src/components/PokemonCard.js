import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    viewBack: false
  }

  toggleView = () => {
    this.setState({viewBack: !this.state.viewBack})
  }

  render() {
    return (
      <Card>
        <div onClick={this.toggleView}>
          <div className="image">
            <img src={this.state.viewBack ? this.props.back : this.props.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
