import React from 'react';
import {useNavigate} from "react-router-dom";

const HeroCard = ({hero}) => {
    const {id, superhero} = hero;
    const navigate = useNavigate();
    const handlerClickHeroDetail = () => {navigate(`/hero/${id}`)};

    return (
        <div className="card bg-dark text-light" style={{width: '12rem', margin: '0 1rem 1rem 0'}} onClick={handlerClickHeroDetail}>
            <img src={`/assets/img/${id}.jpg`} className="card-img-top" alt={superhero}/>
            <div className={'position-absolute bottom-0 w-100 bg-dark text-light opacity-75'}>
                <div className="card-body" >
                    <p className="card-text text-center">
                        {superhero}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
