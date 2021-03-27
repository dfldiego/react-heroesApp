import React from 'react'
import { Redirect, useParams } from 'react-router'
import getHeroById from '../selectors/getHeroById';

const DetalleHeroe = () => {

    // obtengo el id del heroe seleccionado
    const { id } = useParams();
    console.log(id);
    const heroe = getHeroById(id);
    console.log(heroe);

    if (!heroe) {
        return <Redirect to="/" />;
    }

    const { nombre, poderes, bio, img, aparicion, casa } = heroe;

    return (
        <div>
            <h1>Detalle Heroe works!</h1>
        </div>
    )
}

export default DetalleHeroe
