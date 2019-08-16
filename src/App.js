import React from 'react';
import TicTacToe from './Pages/TicTacToe'
import ComponentDemo from './Pages/ComponentDemo'
import NavigationBase from './Navigation/NavigationBase'
import * as styles from './Colours/ColourSheet';

const Pages = ["Game", "Statistics"]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Page: "Game",
      NavType: "Burger",
      Colours: "Light",
      Menus: {Burger: false, Options: false},
      SquaresClicked: {
        0: [0,0], 1: [0,0], 2: [0,0], 3: [0,0], 4: [0,0], 5: [0,0], 6: [0,0], 7: [0,0], 8: [0,0]
      },
      Wins: [0,0]
  }
}
  StateChange(Target, Value){
    let State = this.state;
    State.Menus = {Burger: false, Options: false}
    State[Target] = Value;
    this.setState(State)
  }
  PageSelect(Page){
    let page;
    switch(Page){
      case "Game":
        page = (<TicTacToe 
          Info={{
            SquaresClicked: this.state.SquaresClicked,
            Wins: this.state.Wins,
          Board: this.state.Board}} />)
        break;
      case "Statistics":
        page = (<ComponentDemo SquaresClicked={this.state.SquaresClicked} Wins={this.state.Wins} />)
        break;
      default:
      page = (<h1> No such page exists</h1>)
      break;
    }
    return page
  }

  render(){
  return (
    <div className="Body" style={{"width": "100vw", "height": "100vh", overflow: "hidden", maxWidth: "100vw"}}>
      <style>
        {styles.StyleString(styles[this.state.Colours])}

      </style>
      <NavigationBase ClickFunction={this.StateChange.bind(this)} Pages={Pages} Menus={this.state.Menus} NavType={this.state.NavType} Page={this.state.Page}/>
      {this.PageSelect(this.state.Page)}
    </div>
  );
  }
}

export default App;
