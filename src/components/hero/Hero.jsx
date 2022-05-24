import React from 'react';
import {useParams} from "react-router-dom";

const Hero = () => {
    let params = useParams();
    return (
        <div>
            <h1>Hero {params['heroCode']}</h1>
        </div>
    );
};

export default Hero;
