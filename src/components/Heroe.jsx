import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

const Heroe = ({ heroe }) => {

    const { id, nombre, poderes, img } = heroe;

    return (
        <Fragment>
            <div className="tarjeta__heroe">
                <div className="row">
                    <div className="col text-center text-success">{nombre}</div>
                    <div className="col text-danger">Poderes</div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={require(`../assets/img/${img}`).default} alt={nombre} />
                    </div>
                    <div className="col col__poderes">
                        <ul>
                            {
                                poderes.map(poder => (
                                    <li>{poder}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link
                            className="text-uppercase text-decoration-none text-dark p-2 bg-aqua"
                            to={`./detalle-heroe/${id}`}
                        >Ver Más</Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Heroe
