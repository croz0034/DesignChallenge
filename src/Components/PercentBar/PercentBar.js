import React from 'react';
import './PercentBar.css'

class PercentBar extends React.Component {

  Style(Current){
    let Style = {width: `${(Current/this.props.Value2)*100}%`}
    if(Style.width === "100%"){
      Style["borderRadius"] = "6px";
    }
    return Style
  }

  render(){

  return (
    <div id="ProgressShell">
       <div style={this.Style(this.props.Value1)}> </div>
       {this.props.Text && ( 
           <p> {this.props.Value1} / {this.props.Value2}</p>
       )}
    </div>
  );
}

}


export default PercentBar;
