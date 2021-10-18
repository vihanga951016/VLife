import React from 'react'
import  './Home.css'
import Banner from './Assets/banner.png'
import { FaSearch } from 'react-icons/fa';

// import Footer from './Footer/Footer'

const Home = () => {
    return (
        <div>
            <div className="header">
                <li><h1 className="header-title">Welcome to:</h1></li>
                <li><img className="img" src={Banner} alt="banner"/></li>
                <div className="chooser">
                    <input className="insert" placeholder="Choose what you want"/>
                    <button className="search-button"><FaSearch className="search-icon"/></button>
                    <div style={{fontSize:'15px',marginTop:'18px',marginRight:'10px'}}><lable>Sign up bellow if you are not.</lable></div>
                </div>
            </div>
            {/* <Footer /> */}
            <div className="pannel-body">
                <table className="anim-table">
                    <tr>
                        <th>
                        <a href="product.html" style={{textDecoration:'none'}}>
                            <div className="card-1">  
                                <p style={{width:'77px',height:'19px',marginLeft:'20px',marginTop:'10px'}}>Job seeker's</p>
                                {/* using this user can visible every post category. so that they have to search their category and find
                                    a suitable work for them*/}
                            </div>
                        </a>
                        </th>
                        <th>
                        <a href="product.html" style={{textDecoration:'none'}}>
                            <div className="card-2">
                                <p style={{width:'77px',height:'19px',marginLeft:'20px',marginTop:'10px'}}>Post Vacancies</p>
                                {/* using this, a company member can create vacancy posts without creating any account. but he/she has to
                                give all data every time, when they creating a new vacancy post*/}
                            </div>
                        </a>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Home
