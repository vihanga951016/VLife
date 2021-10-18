import React from 'react'
import './Navbar.css'
import ReactTooltip from 'react-tooltip';

import { FaUserCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { SiAboutDotMe } from 'react-icons/si';
import { MdLiveHelp } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { RiLoginCircleFill } from 'react-icons/ri';
import {BrowserRouter as Link} from 'react-router-dom'



const Navbar = () => {
    return (
            
                <div class="topnav">
                    <ReactTooltip />
                    <Link to="/"><a href="/" style={{marginTop:'-1px'}}><FaHome data-tip="Home" style={{outline:'none'}}></FaHome></a></Link>
                    <Link to="/contact"><a className="contact" href="/contact"><MdContactPhone data-tip="Contact Us" style={{outline:'none'}} /></a></Link>
                    <Link to="/about"><a className="about" href="/about" style={{fontSize:'50px',marginTop:'-11px'}}><SiAboutDotMe data-tip="About Us" style={{outline:'none'}} /></a></Link>
                    <Link to="/help"><a className="help" href="/help"><MdLiveHelp data-tip="Need help ?" style={{outline:'none'}} /></a></Link>
                    <a className="login" style={{float:'right',marginTop:'-3px',fontSize:'35px'}} href="/login"><RiLoginCircleFill data-tip="Login" style={{outline:'none'}} /></a>
                    <a className="user" style={{float:'right'}} href="/userregister"><FaUserCircle data-tip="User registration" style={{outline:'none'}} /></a>
                    <Link to="/companyregister"><a className="company" style={{float:'right',fontSize:'38px',marginTop:'-7px'}} href="/companyregister"><MdBusinessCenter  data-tip="Company registration" style={{outline:'none'}} /></a></Link>
                </div>
            
    )}

export default Navbar
