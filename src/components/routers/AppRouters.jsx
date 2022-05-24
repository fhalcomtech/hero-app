import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../login/LoginScreen'
import DashboardRouters from "./DashboardRouters";



export const AppRouters = () => {
  return (
    <BrowserRouter>

        <Routes>
            <Route path='login' element={<LoginScreen/>}/>
            <Route path='/*' element={<DashboardRouters/>}/>
        </Routes>
    </BrowserRouter>
  )
}
