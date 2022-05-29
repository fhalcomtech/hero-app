import {heroes} from "../assets/data/heroes-with-desc";

export const fnGetHerosById = (heroId) => heroes.find(hero=>hero.id === heroId);
export const fnGetHoerosByPublisher = (publisher) => heroes.filter(hero=> hero.publisher === publisher);