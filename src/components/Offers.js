import React, { Component } from 'react'
import Title from './Title'

import spaImg from '../images/spa.jpg'
import gymImg from '../images/gym.jpg'
import restaurantImg from '../images/restaurant.jpg'
import { Link } from 'react-router-dom'

export default class Offers extends Component {
    state={
        offers:[
            {title:"SPA Salon",image:spaImg},
            {title:"GYM",image:gymImg},
            {title:"restaurant",image:restaurantImg}
        ]
    }

    render() {
        let offersItems=this.state.offers.map((item,index)=>{
            return (
                <div className="service_item" key={index}>
                    <div className="img_container">
                        <img src={item.image} alt="" />
                    </div> 
                    <h2 className="service_item_title">{item.title}</h2>
                    <div className="item_content">
                        <h2>{item.title}</h2>
                        <p>Starting from - 75$</p> 
                        <Link to="/rooms" className="btn" >view rooms</Link>
                    </div>
                </div>
            )
        })
        return (
            <section className="features section">
                <div className="container">
                    <Title title="Best Offers for you"></Title>
                    <div className="features_services">
                        {offersItems}
                    </div>
                </div>
            </section>
        )
    }
}
