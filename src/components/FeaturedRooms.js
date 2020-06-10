import React, { Component } from 'react'
import {RoomContext} from '../Context'
import Title from './Title' 
import Room from './Room'
import Loading from './Loading'

export default class FeaturedRooms extends Component {
    static contextType=RoomContext
    render() {
        const value=this.context
        let {featuredRooms,loading}=value 
        let rooms=featuredRooms.map((room,index)=>{
            return <Room room={room} key={index} />
        })
        return (
            <section className="features-rooms section">
                <div className="container">
                    <Title title="Features Rooms" />
                     
                    <div className="features-rooms_wrapper">
                        {loading ? <Loading /> : rooms}
                    </div>
                </div>
            </section>
        )
    }
}
