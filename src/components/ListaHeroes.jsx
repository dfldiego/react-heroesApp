import React, { Fragment } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import heroesJson from '../data/heroes.json';
import getHeroByCasa from '../selectors/getHeroByCasa';
import Heroe from './Heroe';
import getHeroBySearch from '../selectors/getHeroBySearch';

const ListaHeroes = ({ casa }) => {
    let heroes = [];

    /**
    * obtener lo introducido desde input Search(Componente MenuOpciones)
    */
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    if (casa) {
        heroes = getHeroByCasa(casa);
    } else if (q !== '') {
        heroes = getHeroBySearch(q);
    } else if (!casa && q === '') {
        heroes = heroesJson;
    }

    return (
        <Fragment>
            <div className="doscolumnas_row animate__animated animate__fadeIn">
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
