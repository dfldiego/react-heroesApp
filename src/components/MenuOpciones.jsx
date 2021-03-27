import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const MenuOpciones = () => {
    const [search, setSearch] = useState('');

    const handleChangeSearch = e => {
        setSearch(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        Heroes DC
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Heroes Marvel
                    </NavLink>
                </div>
            </div>

            <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    name="search"
                    onChange={handleChangeSearch}
                    autoComplete="off"
                />
                <Link className="btn btn-outline-success my-2 my-sm-0" to={`?q=${search}`}>Search</Link>
            </form>

        </nav>
    )
}

export default MenuOpciones;
