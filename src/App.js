import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaHeroes from './components/ListaHeroes';
import DetalleHeroe from './components/DetalleHeroe';
import MenuOpciones from './components/MenuOpciones';

function App() {

  return (
    <Fragment>
      <Router>
        <MenuOpciones />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={ListaHeroes} />
            <Route exact path="/marvel" component={ListaHeroes} />
            <Route exact path="/dc" component={ListaHeroes} />
            <Route exact path="/detalle-heroe/:id" component={DetalleHeroe} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
