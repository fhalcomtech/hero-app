import React, {useMemo} from 'react';
import {fnGetHerosByPublisher} from "../../helpers/HerosHelper";
import HeroCard from "./HeroCard";

const HeroList =({publisher}) => {
    const heroes = useMemo(()=> fnGetHerosByPublisher(publisher),[publisher]);
    return (
        <div className={'container pt-5 d-flex flex-wrap'}>
                {heroes.map((hero) =>
                    (<HeroCard key={hero.id} hero={hero}/>)
                )}
        </div>
    );
}

export default HeroList;
