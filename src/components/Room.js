import React from 'react'
import {Link} from 'react-router-dom'

export default function Room({room}) {
    let {name,price,images,slug}=room
    return (
        <div className="room">
            <div className="img-container">
                <img src={images[0]} alt="" />
                <Link to={`/rooms/${slug}`} className="btn">view room</Link>
            </div>
            <p>{price}$/night</p>
            <div className="room_content">
                <h2>{name}</h2>
            </div>
        </div>
    )
}
