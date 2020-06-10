import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import RoomsContainer from '../components/RoomsContainer'
import {Link} from 'react-router-dom'

export default function Rooms() {
    return (
        <>
            <Hero hero="hero_rooms">
                <Banner subtitle="Our Rooms" title="Welcome to Milenia Luxury Hotel">
                    <Link to="/" className="btn">Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer></RoomsContainer>
            <Footer></Footer>
        </>
    )
}
