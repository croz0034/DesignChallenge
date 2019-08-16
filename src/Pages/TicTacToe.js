import React from 'react';
import Piece2 from "../Components/GamePiece"
import Popup from "../Components/Popup/Popup"
import "./TicTacToe.css"


// Props
// Info {object} containint
//    SquaresClicked: {Object of Arrays}
//    Wins: integer
//    Board: array

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Board: [0,0,0,0,0,0,0,0,0],
      PlayerTurn: 1,
      SquaresClicked: {
        0: [0,0], 1: [0,0], 2: [0,0], 3: [0,0], 4: [0,0], 5: [0,0], 6: [0,0], 7: [0,0], 8: [0,0]
      },
      Wins: [0,0],
      Locked: false,
      Popup: false
  }
}
componentDidMount(){
  let State = this.state;
  State.SquaresClicked = this.props.Info.SquaresClicked;
  State.Wins = this.props.Info.Wins

}

  ItemClick(ev){
    if(ev.target.id && this.state.Board[ev.target.id] === 0 && this.state.Locked === false){
      let State = this.state
      State.Board[ev.target.id] = State.PlayerTurn;
      
      State.SquaresClicked[ev.target.id][State.PlayerTurn - 1] ++

(State.PlayerTurn === 1)? State.PlayerTurn = 2 : State.PlayerTurn = 1;
let Winner = this.CheckVictory();
if(Winner === 0 || Winner === 1){
  State.Wins[Winner] ++
  State.Locked = Winner;
  State.Popup = true;
}
this.setState(State)
  }
  }

  CheckVictory(){
    let Locations = this.state.Board;
    let Victor;
    for(let x = 0; x < 7; x += 3){
    // Checks Rows
    if(Locations[x] === Locations[x+1] && Locations[x] === Locations[x+2]){
      Victor = Locations[x]
    }
    // Check Columns
    let column = x / 3;
    if(Locations[column] === Locations[column+3] && Locations[column] === Locations[column+6]){
      Victor = Locations[column]
    }
    }
    if(Locations[0] === Locations[4] && Locations[0] === Locations[8]){
      Victor = Locations[0]
    }
    if(Locations[2] === Locations[4] && Locations[2] === Locations[6]){
      Victor = Locations[2]
    }
    if(Victor){
      return (Victor - 1)
    }
  }
  
  Reset(){
    let State = this.state;
    State.Board = [0,0,0,0,0,0,0,0,0];
    State.PlayerTurn = 0;
    State.Locked = false
    this.setState(State);
  }
  popupToggle(){
    let State = this.state;
    State.Popup = !State.Popup;
    this.setState(State)
  }

  render(){
  return (
    <div className="Game">
      {
        this.state.PlayerTurn === 1 && <h1> X's Turn</h1> || 
        <h1> O's Turn</h1>
      }
      <div className="GameBoard" onClick={this.ItemClick.bind(this)}>
        {
          this.state.Board.map((item, x)=>(

            <div key={x}><Piece2 key={`${item} ${x}`} id={x} Item={item} /></div>
          ))

        }
      </div>
      
      <button className="Reset" onClick={this.Reset.bind(this)}> Reset </button>
{
  this.state.Popup &&
<Popup Title="Game Complete!" 
    Elements={[(<p key="z"> Congratulations to player {this.state.Locked + 1}! </p>)]}
    Options={
      {Draggable: true,
      Minimize: true,
      Complete: this.popupToggle.bind(this)}
    }
    />}
    </div>
  );}
}

export default TicTacToe;
