import React from 'react';
import './App.css';
import Inicio from './Home/Inicio.jsx';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Componentes-Generales/Menu/menu.jsx';
import About from './About/about.jsx';
import Contact from './Contact';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Menu />
                <Route path="/" exact component={Inicio} />
                <Route path="/acerca-de" component={About} />
                <Route path="/contacto" component={Contact} />
            </Router>
        )
    }
}

export default App;
