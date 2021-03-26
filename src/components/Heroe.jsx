import React, { Fragment } from 'react';
import '../assets/css/styles.css';

const Heroe = ({ heroe }) => {

    const { nombre, poderes, img } = heroe;
    /**
     * TODO: aqui hacer tal cosa
     * FIXME: otra cosa
     */
    return (
        <Fragment>

            {/* FIXME ASDASDASDASD */}
            <div className="tarjeta__heroe">
                <div className="row">
                    <div className="col text-center text-success">{nombre}</div>
                    <div className="col text-danger">Poderes</div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={require(`../assets/img/${img}`).default} />
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
                        <button className="text-uppercase">ver mas</button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Heroe
