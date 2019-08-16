import React from 'react';
import './Options.css'

class NavigationBase extends React.Component {


    NavSelect(ev){
        this.props.inputFunction("NavType", ev.target.value)
        this.props.inputFunction("Menus", {Burger: false, Options: false})
      }
    ColourSelect(ev){
      this.props.inputFunction("Colours", ev.target.value)
      this.props.inputFunction("Menus", {Burger: false, Options: false})
    }

  render(){
    let classes = "Hidden Body";
    if(this.props.Menus.Options){
        classes = "Active Body"
    }
    if(this.props.NavType === "Burger"){
        classes += " Burger"
    }

  return (
    <div id="Options" className={classes}>
    <h4>Navigation Style</h4>
  <select className="Body" onInput={this.NavSelect.bind(this)}>
    <option value="Burger"> Burger Navigation</option>
    <option value="Tabs"> Tab Navigation</option>
  </select>
        <h4>Colour Scheme</h4>
      <select className="Body" onInput={this.ColourSelect.bind(this)}>
        <option value="Light"> Blue </option>
        <option value="Black"> Black </option>
      </select>
    </div>
  );
}

}


export default NavigationBase;
