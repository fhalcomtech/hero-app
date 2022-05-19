import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../dc/DcScreen'
import { LoginScreen } from '../login/LoginScreen'
import { SearchScreen} from '../search/SearchScreen'
import { MarvelScreen} from '../marvel/MarvelScreen'
import { NavBar } from '../ui/NavBar'


export const AppRouters = () => {
  return (
    <BrowserRouter>
        <NavBar/> 
        <Routes>
            <Route path='/' element={<LoginScreen/>}/>
            <Route path='login' element={<LoginScreen/>}/>
            <Route path='search' element={<SearchScreen/>}/>
            <Route path='dc' element={<DcScreen/>}/>
            <Route path='marvel' element={<MarvelScreen/>}/>
        </Routes>
    </BrowserRouter>
  )
}
