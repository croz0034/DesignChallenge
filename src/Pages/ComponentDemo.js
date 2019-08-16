import React from 'react';
import PercentBar from "../Components/PercentBar/PercentBar"
import Radar from "../Components/Radar/Radar"
import "./ComponentDemo.css"

// Props
//  SquaresClicked: Object of arrays
//  Wins: integer

class ComponentDemo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        RadarMoves: {p1: [], p2: []},
        Moves: {p1: [], p2: []}
      }
    }

    componentDidMount(props){
      let State = this.state
      let Keys = Object.keys(this.props.SquaresClicked);

      for(let x = 0; x < Keys.length; x ++){
        // Total number of times each person clicked a given square
        State.Moves.p1.push(this.props.SquaresClicked[x][0])
        State.Moves.p2.push(this.props.SquaresClicked[x][1])

        // Percentage of total clicks (per square) each person preformed
        if(this.props.SquaresClicked[x][0] || this.props.SquaresClicked[x][1]){
        State.RadarMoves.p1.push(
          (this.props.SquaresClicked[x][0] * 100)/ (this.props.SquaresClicked[x][0] + this.props.SquaresClicked[x][1])
        )
        State.RadarMoves.p2.push(
          (this.props.SquaresClicked[x][1] * 100)/ (this.props.SquaresClicked[x][0] + this.props.SquaresClicked[x][1])
        )
      } else {
        State.RadarMoves.p1.push(0)
        State.RadarMoves.p2.push(0)
      }
      }

      this.setState(State)
    }


    render(){
  return (
    <div className="Demo">
      <br />
      <div className="RadarShell">

        <div className="RadarChart">
          <h2> Square Popularity </h2>
          <Radar Info={{
             Labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
             categories: [
              {Name: "Player1", Data: this.state.RadarMoves.p1, Colour: "#ff0000"},
              {Name: "Player2", Data: this.state.RadarMoves.p2, Colour: "#0000ff"}
            ]
          }}/>
      </div>
        <p><strong>Player1:</strong></p><div className="Sample" style={{background: "red"}}></div> <br />
        <p><strong>Player2:</strong></p><div className="Sample" style={{background: "blue"}}></div>

      </div>
<div className="p1Select">
  <h3> P1's Moves</h3>
{this.state.Moves && this.state.Moves.p1.map((clicks, x)=>(
  <p key={`p1${x}`}><strong> {x} : </strong>{clicks}</p>
))}
</div>

<div className="p2Select">
  <h3> P2's Moves</h3>
{this.state.Moves && this.state.Moves.p2.map((clicks, x)=>(
  <p key={`p2${x}`}><strong> {x} : </strong>{clicks}</p>
))}
</div>

<br />
<br />
<h4>Player 1: {this.props.Wins[0]} Wins.</h4>
<h4>Player 2: {this.props.Wins[1]} Wins.</h4>

<div className="BottomBanner">
  <h3> Win percentage bar</h3>
<PercentBar Value1={this.props.Wins[0]} Value2={this.props.Wins[1] + this.props.Wins[0]} />
</div>

    </div>
  );
}
}

export default ComponentDemo;
