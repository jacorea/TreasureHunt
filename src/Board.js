import React, { Component } from 'react';
import Squares from './Squares';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



//Make 9 squares in board
//Have board with its own container under a new classname
class Board extends Component {
  constructor(props){
    super(props)
    this.state ={
        spaces: ['?','?','?','?','?','?','?','?','?'],
        treasure: "",
        bomb: "",
        count: 5
      }
  }



  componentDidMount() {
    let { treasure, bomb } = this.state
//logging our treasure and bomb locations before randomization
      console.log("treasure is ", treasure);
      console.log("bomb is ", bomb);
//Randomizing treasure and bomb locations first time
    treasure = Math.floor(Math.random()* 9)
    bomb = Math.floor(Math.random()* 9)
//logging our treasure and bomb locations after randomization
    console.log("treasure after ", treasure)
    console.log("bomb after ", bomb)
//Randomize treasure and bomb locations are the same
    while( bomb === treasure){
      bomb = Math.floor(Math.random() * 9)
      console.log("treasure after 2nd iteration ", treasure);
      console.log("bomb after 2nd iteration ", bomb);
    }


    this.setState({treasure: treasure, bomb: bomb})
  }

  //Add a method to reset the Game
  restartGame() {
    this.setState(this.state ={
        spaces: ['?','?','?','?','?','?','?','?','?'],
        treasure: "",
        bomb: "",
        count: 5
      })
  }


  click(e){
    let { count , spaces, treasure, bomb } = this.state
    // alert("you have clicked on " + e.target.id);

//console logging the type of value for id and treasure
    // console.log(typeof(e.target.id));
    // console.log(typeof(treasure));


// stop decreasing counter after game is Over and stop at zero
// refactor to clean up repetitive code
//change alert after value in box appears
    if(count === 1 && e.target.id == treasure){
      count--
      spaces[e.target.id] = 'treasure'
      alert("you win, Game Over!")
    } else if(count === 1 && e.target.id == bomb) {
      count--
      spaces[e.target.id] = "bomb"
      alert("You've hit a bomb, you lose! Game Over!")
    } else if (count === 1){
      count--
      spaces[e.target.id] = 'tree'
      alert("Game Over!")
    } else if(count > 0) {
      count--
      if(e.target.id == treasure){
        spaces[e.target.id] = 'treasure'
        alert("you win, Game Over!")
        count = 0
      } else if(e.target.id == bomb){
        spaces[e.target.id] = "bomb"
        alert("You have hit a bomb, you lose! Game Over!")
        count = 0
      } else {
        spaces[e.target.id] = 'tree'
        }
      }
      this.setState({spaces: spaces, count: count})
    }


  //Get the new value in the spaces array
  // if(e.target.id == treasure){
  //   spaces[e.target.id] = 'treasure'
  //   alert("you win")
  // } else {
  //   spaces[e.target.id] = 'tree'
  // }







  render() {
    let { spaces, count, treasure, bomb } = this.state

    {/*if (spaces[id] === treasure) {
      alert("You Win!")
    }
    console.log("this is the treasure", treasure);*/}

    return (
      <div>
      <h1 className = "counter" onClick = {this.click.bind(this)}> you have this amount of guesses: {count}</h1>
      <div className = "board-container" >
      <h1 className= "square1" id = "0" onClick={this.click.bind(this)}>{spaces[0]}</h1>
      <h1 className= "square1" id = "1" onClick={this.click.bind(this)}>{spaces[1]}</h1>
      <h1 className= "square1" id = "2" onClick={this.click.bind(this)}>{spaces[2]}</h1>
      <h1 className= "square1" id = "3" onClick={this.click.bind(this)}>{spaces[3]}</h1>
      <h1 className= "square1" id = "4" onClick={this.click.bind(this)}>{spaces[4]}</h1>
      <h1 className= "square1" id = "5" onClick={this.click.bind(this)}>{spaces[5]}</h1>
      <h1 className= "square1" id = "6" onClick={this.click.bind(this)}>{spaces[6]}</h1>
      <h1 className= "square1" id = "7" onClick={this.click.bind(this)}>{spaces[7]}</h1>
      <h1 className= "square1" id = "8" onClick={this.click.bind(this)}>{spaces[8]}</h1>
      <button type="button" onClick= {this.restartGame.bind(this)} > Restart Game </button>
      </div>
      </div>
    )
  }
}

export default Board
