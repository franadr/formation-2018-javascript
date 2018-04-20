import config from '../config';
import axios from 'axios';

class HeroService {

    findById(idHero) {
        return axios.get(`${config.url}/superheroes/${idHero}`)
                    .then((response) => response.data);
    }

    getHeroes() {
        return axios.get(`${config.url}/superheroes`)
            .then((response) => response.data)
            .then((heroes) => heroes.map((hero) => {
                    const heroNameLength = hero.heroName.length;
                    const historyLength = hero.history.length
                    const computedLength = Math.floor(historyLength / heroNameLength);
                    hero.summaryLength = 200 + (computedLength < 200 ? computedLength : 200);
                    return hero;
                })
                .sort((a, b) => {
                    if(a.heroName < b.heroName) return -1;
                    if(a.heroName > b.heroName) return 1;
                    return 0;
                })
            );
    }

    addHero(hero) {
        return axios.post(`${config.url}/superheroes`, hero)
                    .then((response) => response.data);
    }

    updateHero(hero) {
        return axios.put(`${config.url}/superheroes/${hero.idHero}`, hero)
                    .then((response) => response.data);
    }

}

export default new HeroService();