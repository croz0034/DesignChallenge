import React from 'react';
import Burger from "./Burger/BurgerNavigation"
import Tab from "./Tab/TabNavigation"
import Options from "./Options/Options"

class NavigationBase extends React.Component {

  render(){
    let p = this.props
  return (
    <React.Fragment>
      {this.props.NavType === "Burger" &&
      <Burger ClickFunction={p.ClickFunction} Pages={p.Pages} Menus={p.Menus} NavType={p.NavType} Page={p.Page}/>
    }
     {this.props.NavType === "Tabs" && 
    <Tab ClickFunction={p.ClickFunction} Pages={p.Pages} Menus={p.Menus} NavType={p.NavType} Page={p.Page} />
  }


<Options Menus={this.props.Menus} inputFunction={p.ClickFunction} NavType={this.props.NavType}/>

      





      </React.Fragment>
  );
}

}


export default NavigationBase;
