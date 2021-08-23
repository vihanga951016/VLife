import React from 'react'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { SiAboutDotMe } from 'react-icons/si';
import { MdLiveHelp } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { RiLoginCircleFill } from 'react-icons/ri';


const Navbar = () => {
    return (
        <div class="topnav">
            <a href="#news" style={{marginTop:'-1px'}}><FaHome ></FaHome></a>
            <a className="contact" href="#contact"><MdContactPhone /></a>
            <a className="about" href="#about" style={{fontSize:'50px',marginTop:'-11px'}}><SiAboutDotMe /></a>
            <a className="help" href="#contact"><MdLiveHelp /></a>
            <a className="login" style={{float:'right',marginTop:'-3px',fontSize:'35px'}} href="#about"><RiLoginCircleFill/></a>
            <a className="user" style={{float:'right'}} href="#contact"><FaUserCircle /></a>
            <a className="company" style={{float:'right',fontSize:'38px',marginTop:'-7px'}} href="#contact"><MdBusinessCenter /></a>
        </div>
    )
}

export default Navbar
