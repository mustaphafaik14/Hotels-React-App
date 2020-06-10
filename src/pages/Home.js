import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Offers from '../components/Offers'
import FeaturedRooms from '../components/FeaturedRooms'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Hero hero="hero">
                <Banner subtitle="Hotels & Resort Rooms" title="Welcome to Milenia Luxury Hotel">
                    <Link to="/rooms" className="btn">View Rooms</Link>
                </Banner>
            </Hero>
            <Offers></Offers>
            <FeaturedRooms></FeaturedRooms>
            <Footer></Footer>
        </>
    )
}
