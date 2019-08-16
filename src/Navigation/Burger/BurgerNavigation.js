import React from 'react';
import './BurgerNavigation.css';

class Burger extends React.Component {

  OpenBurger(){
    let NewValue = {Burger: false, Options: false}
    NewValue.Burger = !this.props.Menus.Burger
    this.props.ClickFunction("Menus", NewValue)
  }
  OpenOptions(){
    let NewValue = {Burger: false, Options: false}
    NewValue.Options = !this.props.Menus.Options
    this.props.ClickFunction("Menus", NewValue)
  }
  Navigate(ev){
    if(ev.target.id){
      this.props.ClickFunction("Page", ev.target.id)
    }
  }
  NavOption(ev){
    this.props.ClickFunction("NavType", ev.target.value)
    this.props.ClickFunction("Menus", {Burger: false, Options: false})
  }

  render(){
  return (
    <React.Fragment>
      <div className="TopBanner PrimaryBanner">
      <img className="BurgerButton" alt="Navigation" 
      src={require("../../Images/BurgerBar.svg")}
      onClick={this.OpenBurger.bind(this)}
      />
      <h1 id="BurgerTitle" className="textbanner"> {this.props.Page}</h1>
      <img className="OptionsButton" alt="Options" 
      src={require("../../Images/Options.svg")}
      onClick={this.OpenOptions.bind(this)}
      />
      </div>

      <nav className={(this.props.Menus.Burger && "Burger Body Active")|| "Burger Body Hidden"}
      onClick={this.Navigate.bind(this)}>
        {
          this.props.Pages.map((page)=>(<p id={page} key={page}>{page}</p>))
        }
      </nav>



<div className="Spacer"></div>
      </React.Fragment>
  );


}
}

export default Burger;
