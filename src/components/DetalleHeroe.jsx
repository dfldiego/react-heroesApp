import React from 'react'
import { Redirect, useParams } from 'react-router'
import getHeroById from '../selectors/getHeroById';

const DetalleHeroe = ({ history }) => {

    // obtengo el id del heroe seleccionado
    const { id } = useParams();
    const heroe = getHeroById(id);

    if (!heroe) {
        return <Redirect to="/" />;
    }

    const { nombre, poderes, bio, img, aparicion, casa } = heroe;

    /**
     * push(): nos envia a una ruta especifica
     * goBack(): nos envia a la ruta anterior
     */
    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={require(`../assets/img/${img}`).default}
                    alt={nombre}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{nombre}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Biografía:</b> {bio} </li>
                    <li className="list-group-item"> <b>Aparición:</b> {aparicion} </li>
                    <li className="list-group-item"> <b>Casa:</b> {casa} </li>
                </ul>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">  <b>Poderes:</b>
                        {poderes.map(poder => <li className="list-group-item">  {poder} </li>)}
                    </li>

                </ul>
            </div>

            <button
                className="btn btn-outline-info"
                onClick={handleReturn}
            >
                Retornar
            </button>

        </div>
    )
}

export default DetalleHeroe
