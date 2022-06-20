import {heroes} from "../assets/data/heroes-with-desc";

export const fnGetHerosById = (heroId) => heroes.find(hero=>hero.id === heroId);
export const fnGetHerosByPublisher = (publisher) => heroes.filter(hero=> hero.publisher === publisher);
export const fnGetHerosByName = (heroName) => heroes.filter(hero => (heroName?hero.superhero.toLowerCase().includes(heroName.toLowerCase()):false))