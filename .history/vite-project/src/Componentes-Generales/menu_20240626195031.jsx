import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

// Vamos a crear el menu como un componente para poder usarlo en las diferentes paginas


// Inicio del menu 

class Menu extends React.Component{
    render(){
        return(
            <BrowserRouter>
<BrowserRouter>
    <Switch>
       <Route path="/" component={ App }/>
       <Route path="/path2" component={ App2 }/>
    </Switch>
  </BrowserRouter>, document.getElementById('root')
            </BrowserRouter>
        )
    }
}

export default Menu;