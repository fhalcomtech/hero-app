import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {LoginScreen} from '../login/LoginScreen'
import DashboardRouters from "./DashboardRouters";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export const AppRouters = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route path={"/*"} element={<LoginScreen/>}/>
                        </Routes>
                    </PublicRoute>
                }/>
                <Route path='/*' element={
                    <PrivateRoute>
                        <DashboardRouters/>
                    </PrivateRoute>
                }/>
            </Routes>
        </BrowserRouter>
    )
}
