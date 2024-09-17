import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Register from './components/Register'
import Login from './components/Login'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import Schedule from './components/Schedule'
import OrderTicket from './components/OrderTicket'
import RouteTrain from './components/RouteTrain'
import About from './components/About'


const App = () => {    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/beranda' />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/beranda' element={<HomePage />} />
                    <Route path='/kontak' element={<Contact />} />
                    <Route path='/rute' element={<RouteTrain />} />
                    <Route path='/jadwal' element={<Schedule />} />
                    <Route path='/tiket' element={<OrderTicket />} />
                    <Route path='/tentang' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App