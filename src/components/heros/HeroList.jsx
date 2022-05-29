import React, {useMemo} from 'react';
import {fnGetHoerosByPublisher} from "../../helpers/HerosHelper";
import HeroCard from "./HeroCard";

const HeroList =({publisher}) => {
    const heroes = useMemo(()=> fnGetHoerosByPublisher(publisher),[publisher]);
    return (
        <div className={'container pt-5 d-flex flex-wrap'}>
                {heroes.map((hero) =>
                    (<HeroCard key={hero.id} hero={hero}/>)
                )}
        </div>
    );
}

export default HeroList;
