import React from 'react'
import Cart from './Cart'
import Header from './Header'
import Slogan from './Slogan'
import logo from '../assets/images/logo.jpg'
import '../css/logo.css'
import '../css/banner.css'

const Banner = () => {
    return (
        <div className='banner-flex'>
            <div>
                <Header />
                <img src={logo} className='logo' alt="Horrible chaussure" />
                <Slogan />
            </div>
            <div>
                <Cart />
            </div>
        </div>
    )
}

export default Banner
