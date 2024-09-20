import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Componentes-Generales/Menu/menu.jsx';


import Inicio from './Home/Inicio.jsx';
import About from './About/about.jsx';
import Contact from './Contact/contact.jsx';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Menu />
                <Route path="/" exact component={Inicio} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}

export default App;
