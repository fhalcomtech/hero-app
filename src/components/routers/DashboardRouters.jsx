import React from "react";
import {Route, Routes} from "react-router-dom";
import {LoginScreen} from "../login/LoginScreen";
import {SearchScreen} from "../search/SearchScreen";
import {DcScreen} from "../dc/DcScreen";
import {MarvelScreen} from "../marvel/MarvelScreen";
import {NavBar} from "../ui/NavBar";
import Hero from "../hero/Hero";

const DashboardRouters = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<LoginScreen/>}/>
                <Route path='search' element={<SearchScreen/>}/>
                <Route path='dc' element={<DcScreen/>}/>
                <Route path='marvel' element={<MarvelScreen/>}/>
                <Route path='hero/:heroCode' element={<Hero/>}/>
            </Routes>
        </>
    );
};

export default DashboardRouters;
