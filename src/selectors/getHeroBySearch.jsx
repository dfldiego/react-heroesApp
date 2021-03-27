import heroes from '../data/heroes.json';

/**
 * @param search buscamos un heroe con esta descripcion: nombre-bio-poderes.
 * @returns heroe
 */
const getHeroBySearch = (search = '') => {

    if (search === '') {
        return [];
    }

    search = search.toLocaleLowerCase();

    const heroesFiltrados = heroes.filter(heroe => {
        if (heroe.nombre.toLocaleLowerCase() === search || heroe.bio.toLocaleLowerCase().indexOf(String(search)) !== -1) {
            return heroe;
        }
        const poderes = heroe.poderes.map(poder => poder.toLocaleLowerCase());
        if (poderes.includes(search)) {
            return heroe;
        }
        return null;
    });

    return heroesFiltrados;
}

export default getHeroBySearch