import React from 'react'
import  './Home.css'
import Navbar from './Navbar/Navbar'
import Pannel from './HomeIconsPannel/Pannel'
import HomeHeader from './HomeHeader/HomeHeader'
// import Footer from './Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeHeader />
            <Pannel />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
