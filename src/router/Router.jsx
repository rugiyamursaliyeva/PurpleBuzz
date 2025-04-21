import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/home/Home'
import NotFound from '../components/NotFound'
import Contact from '../pages/contact/Contact'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
            <Route path='*' element={<NotFound/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router