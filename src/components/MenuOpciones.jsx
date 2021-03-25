import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MenuOpciones = () => {



    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link
                                class="nav-link"
                                to={'/'}
                            >Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                class="nav-link"
                                to={'/dc'}
                            >Heroes DC </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                class="nav-link"
                                to={'/marvel'}
                            >Heroes Marvel </Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </Fragment>
    )
}

export default MenuOpciones
