import React, {useMemo} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {fnGetHerosById} from "../../helpers/HerosHelper";

const Hero = () => {
    const {heroCode} = useParams();
    let navigate = useNavigate();

    const hero = useMemo(()=>fnGetHerosById(heroCode), [heroCode])
    if(!hero){return navigate('/',{ replace: true })}
        const {id, superhero, publisher, alter_ego, first_appearance, characters, color, color2} = hero;

    const handlerBack = () => {
        const goTo = id.split('-')[0];
        navigate(`/${goTo}`);
    }

    return (
        <div className="card" style={{backgroundColor: `${color}`, color: `${color2}`, maxWidth: '540px', margin:'2rem auto 0', boxShadow:`0px 8px 8px -5px ${color}`}}>
            <div className="row g-0">
                <div className="col-md-6 animate__animated animate__fadeInLeft">
                    <img src={`/assets/img/${id}.jpg`} className="img-fluid rounded-start" alt={id}/>
                </div>
                <div className="col-md-6 animate__animated animate__fadeInBottomRight">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">
                            <span style={{fontWeight:'bold'}}>Alter Ego:</span> {alter_ego}<br/>
                            <span style={{fontWeight:'bold'}}>Publisher:</span> {publisher}<br/>
                            <span style={{fontWeight:'bold'}}>First Appearance:</span> {first_appearance}<br/>
                            <span style={{fontWeight:'bold'}}>Characters:</span> {characters}
                        </p>
                    </div>
                    <div className="d-grid gap-2 ms-4 me-4" >
                        <button className='btn' style={{backgroundColor: `${color2}`, color: `${color}`}} onClick={handlerBack}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
