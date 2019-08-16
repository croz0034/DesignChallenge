import React from 'react';
import './Popup.css'

// Props
//  Title: String, Appears in the banner of the popup
//  Elements: Array of react objects to be rendered in popup
//  Options:
//         Minimize, Draggable : Booleans for their respective option
//         Complete: Function for disabling the popup

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Minimized: false,
            StartLocation: {x: 0, y: 0},
            Moving: false,
            ElementPosition: {top: window.innerHeight * 0.2, left: window.innerWidth * 0.1}
        }
      }

    componentDidMount(props){
        let State = this.state;
        this.setState(State)
    }

    Minimize(){
        let State = this.state;
        State.Minimized = !State.Minimized
        this.setState(State)

    }

    DragStart(ev){
        if(this.props.Options.Draggable && ev.target.classList != "BarButton"){
            let State = this.state;
            State.StartLocation = translatePosition(ev);
            State.Moving = true
            this.setState(State)
    }}
    Drag(ev){
        if(this.state.Moving){
        let State = this.state;
        if(translatePosition(ev).x){
            let CurrentLocation = translatePosition(ev);
        let State = this.state;
        State.ElementPosition.top =
         State.ElementPosition.top + (CurrentLocation.y - State.StartLocation.y);
        State.ElementPosition.left =
         State.ElementPosition.left + (CurrentLocation.x - State.StartLocation.x)
        
        if(isNaN(State.ElementPosition.top)){ 
            State.ElementPosition.top = 0 }
        if(State.ElementPosition.top < 0){
            State.ElementPosition.top = 0 }
        if(isNaN(State.ElementPosition.left) || State.ElementPosition.left < 0){ 
            State.ElementPosition.left = 0 }
        if(State.ElementPosition.left > window.innerWidth * 0.2){ 
            State.ElementPosition.left = window.innerWidth * 0.2 }
        State.StartLocation = CurrentLocation;
    }
        this.setState(State)
        }
    }
    Drop(ev){
        let State = this.state;
        State.Moving = false
        this.setState(State)
    
    }

  render(){


    if(!this.state.Minimized){
  return (
    <div id="Popup" style={{top: this.state.ElementPosition.top, left: this.state.ElementPosition.left}}>
        <h2 className="Highlight"
        onMouseDown={this.DragStart.bind(this)}
        onTouchStart={this.DragStart.bind(this)}
        onTouchMove={this.Drag.bind(this)}
        onMouseMove={this.Drag.bind(this)}
        onTouchEnd={this.Drop.bind(this)}
        onClick={this.Drop.bind(this)}
        > 
        
        {this.props.Title} 
            {this.props.Options && this.props.Options.Minimize &&
                <button className="BarButton" onClick={this.Minimize.bind(this)}> - </button>
            }
        </h2>

        <br />

       {this.props.Elements && this.props.Elements.map((Element)=>(Element))}    
{ this.props.Options &&
        <button onClick={this.props.Options.Complete} className="Confirm" > Ok </button>}
    
    </div>
  );} else {
      return (
        <div id="Popup" style={{top: this.state.ElementPosition.top, left: this.state.ElementPosition.left}}>
            <h2 className="Highlight"
        onMouseDown={this.DragStart.bind(this)}
        onTouchStart={this.DragStart.bind(this)}
        onTouchMove={this.Drag.bind(this)}
        onMouseMove={this.Drag.bind(this)}
        onTouchEnd={this.Drop.bind(this)}
        onClick={this.Drop.bind(this)}>
             {this.props.Title} 
            {this.props.Options.Minimize &&
            <button className="BarButton" onClick={this.Minimize.bind(this)}> + </button>
            }
            </h2>
        </div>
      )
  }
}

}

let translatePosition = (ev)=>{
    let position = {x: 0, y: 0};
        if(ev.targetTouches && ev.targetTouches[0].clientX > 0){
            position = {
                x : ev.targetTouches[0].clientX,
                y : ev.targetTouches[0].clientY
            }
        } else if(ev.clientX){
            position = {
                x : ev.clientX,
                y : ev.clientY
            }
        }
    return position
    
}


export default Popup;
