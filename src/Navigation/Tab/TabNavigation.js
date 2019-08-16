import React from 'react';
import './TabNavigation.css';

class Tabs extends React.Component {

  OpenOptions(){
    let NewValue = {Burger: false, Options: false}
    NewValue.Options = !this.props.Menus.Options
    this.props.ClickFunction("Menus", NewValue)
  }
  Navigate(ev){
    if(ev.target.id !== "Opt"){
      this.props.ClickFunction("Page", ev.target.id)
    } else {
        this.OpenOptions()
    }
  }

  render(){
  return (
    <React.Fragment>

      <nav className="TabMenu Body"
      onClick={this.Navigate.bind(this)}>
        {
          this.props.Pages.map((page)=>{
          if(page !== this.props.Page){
          return(<p id={page} key={page}> {page}</p>)
        } else {
          return(<p id={page} className="PrimaryBanner" key={page}> {page}</p>)
        }
            
            })
        }
        <p id="Opt"> Options </p>
      </nav>


<div className="TabSpacer"></div>
      </React.Fragment>
  );


}
}

export default Tabs;
