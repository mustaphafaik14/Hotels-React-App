import React, { Component } from 'react' 
import Client from './Contentful'

 
 
const RoomContext = React.createContext()

export default class RoomProvider extends Component {

    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        size:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }

    formatData(items){
        let tempData=items.map(item=>{
            let {id}=item.sys
            let images=item.fields.images.map(image=>image.fields.file.url)
            let room={...item.fields,id,images}
            return room
        })
        
        return tempData
    }

    getData=async ()=>{
        try{
            let response =await  Client.getEntries({content_type:"beachResortRoomExample",order:'sys.createdAt'})
            let rooms=this.formatData(response.items)
            let maxPrice=Math.max(...rooms.map(room=>room.price))
            let minPrice=Math.min(...rooms.map(room=>room.price))
            let maxSize=Math.max(...rooms.map(room=>room.size))
            let minSize=Math.min(...rooms.map(room=>room.size))
            
            this.setState({
                rooms:rooms,
                sortedRooms:rooms,
                featuredRooms:rooms.filter(room=>room.featured),
                loading:false,
                price:maxPrice,
                size:maxSize,
                minPrice,
                maxPrice,
                maxSize,
                minSize
            })
             
        }catch(err){
            console.log(err)
        }
    }
    

   

    componentDidMount(){
        this.getData() 
    }

    //methodes
    
    getRoom=(slug)=>this.state.rooms.find(room=>room.slug===slug)

    handleChange=e=>{
        let type=e.target.type 
        let value=type ==="checkbox" ? e.target.checked : e.target.value
        let name=e.target.name 

        

        this.setState({
            [name]:value
        },()=>{this.filtredRooms()}) 
    }

    filtredRooms=()=>{
        
        let {rooms,type,capacity,price,size,pets,breakfast}=this.state
        let roomsForSorted=[...rooms]
        capacity=parseInt(capacity)
        price=parseInt(price)
        size=parseInt(size)
        if(capacity !== 1) roomsForSorted=roomsForSorted.filter(room=>room.capacity>=capacity)
        if(type !=="all") roomsForSorted=roomsForSorted.filter(room=>room.type===type)

        roomsForSorted=roomsForSorted.filter(room=>room.price <= price)
        roomsForSorted=roomsForSorted.filter(room=>room.size <=size)
        if(pets) roomsForSorted=roomsForSorted.filter(room=>room.pets)
        if(breakfast) roomsForSorted=roomsForSorted.filter(room=>room.breakfast)
       
         
        
         

        
        this.setState({sortedRooms:roomsForSorted})
    }

    render() {    
        return (
            <RoomContext.Provider value={{...this.state , getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer=RoomContext.Consumer

export {RoomProvider,RoomContext,RoomConsumer}