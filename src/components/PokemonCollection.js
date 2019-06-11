import React, {Fragment} from 'react'
import PokemonCard from './PokemonCard'
import { Card, Button } from 'semantic-ui-react'



class PokemonCollection extends React.Component {

  state = {
    // sortName: false,
    // sortHP: false,
    // sortID: false
    sort: ''
  }
  
  // currentPokemon = () => {
  //   if(this.state.sortName){
  //     return [...this.props.pokemon].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
  //   }
  //   if(this.state.sortHP){
  //     return [...this.props.pokemon].sort((a, b) => (a.stats[5].value > b.stats[5].value) ? 1 : -1)
  //   }
  //   if(this.state.sortID){
  //     return [...this.props.pokemon].sort((a, b) => (a.id > b.id) ? 1 : -1)
  //   }
  //   else {
  //     return this.props.pokemon
  //   }
  // }

   currentPokemon = () => {
    // if(this.state.sortName){
    //   return [...this.props.pokemon].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
    // }
    // if(this.state.sortHP){
    //   return [...this.props.pokemon].sort((a, b) => (a.stats[5].value > b.stats[5].value) ? 1 : -1)
    // }
    // if(this.state.sortID){
    //   return [...this.props.pokemon].sort((a, b) => (a.id > b.id) ? 1 : -1)
    // }
    // else {
    //   return this.props.pokemon
    // }
    switch(this.state.sort){
      case 'name' : return [...this.props.pokemon].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
      case 'hp' : return [...this.props.pokemon].sort((a, b) => (a.stats[5].value > b.stats[5].value) ? 1 : -1)
      case 'id' :  return [...this.props.pokemon].sort((a, b) => (a.id > b.id) ? 1 : -1)
      default : return this.props.pokemon
    }
  }

  handleSort = (e) => {
    this.setState({
      // [e.target.name]: !this.state[e.target.name]
      [e.target.name]: e.target.value
    })    
  }
  // handleSortByName = (e) => {
  //   // console.log(e.target.name)
  //   this.setState({
  //       // [e.target.name]: !this.state[e.target.name]
  //       [e.target.name]: e.target.value
  //   })    
  // }

  // handleSortByHP = (e) => {
  //   // console.log(e.target.name)
  //   this.setState({
  //       [e.target.name]: !this.state[e.target.name]
  //   })    
  // }

  // handleSortByID = (e) => {
  //   // console.log(e.target.name)
  //   this.setState({
  //       [e.target.name]: !this.state[e.target.name]
  //   })    
  // }
 

  // handleSortByHP = () => {
  //   // console.log('hello')
  //   this.state.sortHP ?
  //     this.setState({
  //       pokemon: [...this.props.pokemon].sort((a, b) => (a.stats[5].value > b.stats[5].value) ? 1 : -1),
  //       sortHP: !this.state.sortHP
  //     })
  //   :
  //     this.setState({
  //       pokemon: [...this.props.pokemon],
  //       sortHP: !this.state.sortHP
  //     })
  // }

  render() {
    
    return (
      <Fragment>
        <Button onClick={this.handleSort} name="sort" value=''>Default</Button>
        <Button onClick={this.handleSort} name="sort" value='name'>Sort By Name</Button>
        <Button onClick={this.handleSort} name="sort" value='hp'>Sort By HP</Button>
        <Button onClick={this.handleSort} name="sort" value='id'>Sort By ID</Button>
        <Card.Group itemsPerRow={6}>
        
          <br/>
          {/* <h1>Hello From Pokemon Collection</h1> */}
          {
            this.currentPokemon().map(poke => {
              return <PokemonCard poke={poke}/>
            })
        
          }
        </Card.Group>
      </Fragment>
    )
  }
}

export default PokemonCollection
