import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import WhatsappLink from '../components/WhatsappLink'
import Footer from '../components/Footer'

const AppLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <WhatsappLink/>
        <Footer/>
    </>
  )
}

export default AppLayout