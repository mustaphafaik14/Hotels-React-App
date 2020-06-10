import React from 'react'
import Room from './Room'
import Loading from './Loading'

export default function RoomsList({rooms,loading}) {
    if(rooms.length === 0){
        return (<div className="error-search">
            <h3>No results found</h3>
        </div>)
    } 

    return (
        <section className="rooms_list section">
            <div className="container">
                <div className="rooms_list_wrapper">
                    {loading ? <Loading></Loading> : rooms.map((room,index)=>{
                        return (<Room room={room} key={index} ></Room>)
                    })}
                </div>
            </div>
        </section>
    )
}
