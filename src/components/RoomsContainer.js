import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList' 
import { RoomConsumer } from '../Context'

 

export default function RoomsContainer() {
    return (
        <RoomConsumer>{value=>{ 
            let {rooms,loading,sortedRooms}=value
            
            return (
            <>
                <RoomsFilter rooms={rooms} ></RoomsFilter>
                <RoomsList rooms={sortedRooms} loading={loading}></RoomsList>
            </>
            )
        }}  
        </RoomConsumer>
    )
}
