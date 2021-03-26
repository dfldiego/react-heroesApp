import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ListaHeroes from '../components/ListaHeroes';
import DetalleHeroe from '../components/DetalleHeroe';
import MenuOpciones from '../components/MenuOpciones';

const AppRouter = () => {
    return (
        <Fragment>
            <Router>
                <div>
                    <MenuOpciones />
                    <div className="container mt-5 mb-5">
                        <Switch>
                            <Route exact path="/" component={ListaHeroes} />
                            <Route exact path="/marvel" component={ListaHeroes} />
                            <Route exact path="/dc" component={ListaHeroes} />
                            <Route exact path="/detalle-heroe/:id" component={DetalleHeroe} />

                            {/* redireccionar al home, si ponemos mal un endpoint */}
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Fragment>
    )
}

export default AppRouter
