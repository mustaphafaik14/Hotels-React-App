import React, { Component } from 'react'
//import Hero from '../components/Hero'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'
import {Link, Redirect} from 'react-router-dom'

import {RoomContext} from '../Context'

export default class SingleRoom extends Component {
    
    constructor(props){
        super(props)
        let {slug}=props.match.params
        this.state={
            slug:slug
        }
    }
    static contextType=RoomContext
    render() { 
        let {getRoom}=this.context
        let room=getRoom(this.state.slug)
        if(!room) return (<Redirect to='/Error'></Redirect>)

        let {name,capacity,size,price,images,pets,breakfast,extras,description} = room
        let [mainImg,...imgs]=images
        
        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner subtitle={`${name} Room`} title="Welcome to Milenia Luxury Hotel">
                        <Link to="/rooms" className="btn">View Rooms</Link>
                    </Banner>
                </StyledHero>
                
                <section className="section room_details">
                    <div className="container">
                        <div className="room_details_wrapper">
                            <div className="room_details_imgs">
                                {imgs.map((item,index)=>{
                                    return (<img key={index} src={item} alt="img" className="img_item" /> )
                                })}
                            </div>
                        </div>
                        <div className="room_details_info">
                            <div className="details">
                                <h1>Details</h1>
                                <p>{description}</p>
                            </div>
                            <div className="info">
                                <h1>Infos</h1>
                                <ul>
                                    <li><span>Capacity</span> : {capacity > 1 ? `${capacity} people` : `1 Person`}</li>
                                    <li><span>Price</span> : {price}$</li>
                                    <li><span>Size</span> : {size} SQFT</li> 
                                    <li><span>Pets</span> : {pets ? "Pets Allowed" : "Pets No Allowed"}</li>
                                    <li><span>breakfast</span> : {breakfast ? "breakfast included" : "breakfast no included"}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="room_details_extras">
                            <div className="extras">
                                <h1>Extras</h1>
                                <ul>
                                    {extras.map((item,index)=>{
                                        return (<li key={index}>{item}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
