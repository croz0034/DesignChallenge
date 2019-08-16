import React from 'react';

// Props:
//    Item: expected values of 1, or two.
//    1 will display an X and 2 will display an O.

class GamePiece extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Centerpoint : false,
      Ready: false
    }
    this.ElementSize = React.createRef()
  }

  componentDidMount(){
    if(this.ElementSize){
      let State = this.state;
      State.Centerpoint = this.ElementSize.current.clientWidth / 2;
      State.Ready = true
      this.setState(State)
    }
  }

  render(){
if(this.state.Ready){
  return (
  <svg id={this.props.id}>
      {
      this.props.Item === 2 && 
      <circle cx={this.state.Centerpoint} cy={this.state.Centerpoint} r={this.state.Centerpoint - 5} stroke="black" strokeWidth="4" fill="transparent"/>
      }
  {
      this.props.Item === 1 && 
      <React.Fragment>
      <polyline points={`5 5, ${this.state.Centerpoint * 2 - 5} ${this.state.Centerpoint * 2 - 5}`} style={{stroke:'black','strokeWidth':4}} />
      <polyline points={`5 ${this.state.Centerpoint * 2 - 5}, ${this.state.Centerpoint * 2 - 5} 5`} style={{stroke:'black','strokeWidth':4}} />
      </React.Fragment>
  }
 </svg>
  )} else {
    return (
      <svg ref={this.ElementSize} style={{width: "100%", height: "100%"}}></svg>
    )
  }
}

}


export default GamePiece;