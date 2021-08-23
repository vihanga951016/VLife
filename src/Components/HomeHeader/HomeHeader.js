import React from 'react'
import './HomeHeader.css'
import Banner from '../../Assets/banner.png'
import { FaSearch } from 'react-icons/fa';

const HomeHeader = () => {
    return (
        <div className="header">
            <li><h1 className="header-title">Welcome to:</h1></li>
            <li><img className="img" src={Banner} alt="banner"/></li>
            <div className="chooser">
            <input className="insert" placeholder="Choose what you want"/>
            <button className="search-button"><FaSearch className="search-icon"/></button>
            <div style={{fontSize:'15px',marginTop:'18px',marginRight:'10px'}}><lable>Sign up bellow if you are not.</lable></div>
        </div>
        </div>
    )
}

export default HomeHeader
