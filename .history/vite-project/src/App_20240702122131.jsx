import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Componentes-Generales/Menu/menu.jsx';
import Inicio from './Home/Inicio.jsx';
import About from './About/about.jsx';
import Contact from './Contact/contact.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
            <Menu />
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/acerca-de" component={About} />
                <Route path="/contacto" component={Contact} />
            </Switch>
        </Router>
    );
  }
}

export default App;
