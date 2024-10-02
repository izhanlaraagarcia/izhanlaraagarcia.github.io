import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './Componentes-Generales/Menu/menu.jsx';
import Inicio from './Home/Inicio.jsx';
import About from './About/about.jsx';
import Contact from './Contact/contact.jsx';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Menu />
                <Link path="/" exact component={Inicio} />
                <Link path="/acerca-de" component={About} />
                <Link path="/contacto" component={Contact} />
            </Router>
        )
    }
}

export default App;
