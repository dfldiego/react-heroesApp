import heroes from '../data/heroes.json';

const getHeroByCasa = (casa) => {
    const validCasa = ['DC', 'Marvel'];

    if (!validCasa.includes(casa)) {
        throw new Error(`Casa ${casa} no es correcto`);
    }

    return heroes.filter(heroe => heroe.casa === String(casa));
}

export default getHeroByCasa
