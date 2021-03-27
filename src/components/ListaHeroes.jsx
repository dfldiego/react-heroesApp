import React, { Fragment } from 'react';
import heroesJson from '../data/heroes.json';
import getHeroByCasa from '../selectors/getHeroByCasa';
import Heroe from './Heroe';

const ListaHeroes = ({ casa }) => {
    let heroes = [];

    if (casa) {
        heroes = getHeroByCasa(casa);
    } else {
        heroes = heroesJson;
    }

    return (
        <Fragment>
            <div className="doscolumnas_row">
                {
                    heroes.map(heroe =>
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
