import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MenuOpciones = () => {



    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={'/'}
                            >Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={'/dc'}
                            >Heroes DC </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={'/marvel'}
                            >Heroes Marvel </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </Fragment>
    )
}

export default MenuOpciones
