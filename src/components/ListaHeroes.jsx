import React, { Fragment } from 'react';
import heroesJson from '../datos/heroes.json';
import Heroe from './Heroe';

const ListaHeroes = () => {
    return (
        <Fragment>
            <div className="doscolumnas_row">
                {
                    heroesJson.map(heroe =>
                        <Heroe
                            key={heroe.id}
                            heroe={heroe}
                        />
                    )
                }
            </div>
        </Fragment>
    )
}

export default ListaHeroes
