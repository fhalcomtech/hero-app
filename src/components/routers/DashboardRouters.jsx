import React from "react";
import {Route, Routes} from "react-router-dom";
import {SearchScreen} from "../search/SearchScreen";
import {DcScreen} from "../dc/DcScreen";
import {MarvelScreen} from "../marvel/MarvelScreen";
import {NavBar} from "../ui/NavBar";
import Hero from "../heros/Hero";
import Home from "../static/Home";

const DashboardRouters = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='search' element={<SearchScreen/>}/>
                <Route path='dc' element={<DcScreen/>}/>
                <Route path='marvel' element={<MarvelScreen/>}/>
                <Route path='hero/:heroCode' element={<Hero/>}/>
            </Routes>
        </>
    );
};

export default DashboardRouters;
