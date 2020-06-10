import React ,{useContext} from 'react'
import Title from './Title'
import {TiArrowSortedDown} from 'react-icons/ti'
import { RoomContext } from '../Context'
 
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}


export default function RoomsFilter({rooms}) {
    const context=useContext(RoomContext)
    let {handleChange,size,price,maxPrice,minPrice,minSize,maxSize} = context 

    let types = getUnique(rooms,"type")
    types=["all",...types]
   
    let peoples=getUnique(rooms,'capacity') 
     
    return (
        <section className="rooms_filter section">
            <div className="container">
                <Title title="Search Rooms"></Title>

                <div className="rooms_filter_wrapper">
                    <div className="form-group type-select">
                        <label htmlFor="type">Room Type</label>
                        <select name="type" id="type" className="form-control" onChange={handleChange} >
                             {types.map((type,index)=>{
                                 return (<option key={index} value={type}>{type}</option>)
                             })}
                        </select>
                        <span className="icon"><TiArrowSortedDown/></span>
                    </div>

                             
                    <div className="form-group type-select">
                        <label htmlFor="capacity">Room Capacity</label>
                        <select name="capacity" id="capacity" className="form-control" onChange={handleChange} >
                            {peoples.map((item,index)=>{
                                 return (<option key={index} value={item}>{item}</option>)
                             })}
                        </select>
                        <span className="icon"><TiArrowSortedDown/></span>
                    </div>

                    <div className="form-group type-select">
                        <label htmlFor="price">Room Price {price}$</label>
                        <input className="slider" type="range" name="price" id="price" max={maxPrice} min={minPrice} value={price} onChange={handleChange} />  
                    </div>

                    <div className="form-group type-select">
                        <label htmlFor="size">Room Size {size} SQFT</label>
                        <input className="slider" type="range" name="size" id="size"
                         max={maxSize} min={minSize} value={size} onChange={handleChange} />  
                    </div>

                    <div className="cheboxk-group form-group ">
                        <label htmlFor="breakfast">
                        <input type="checkbox" id="breakfast" name="breakfast" onChange={handleChange} />
                        Breakfast  </label> 

                        <label htmlFor="pets">
                        <input type="checkbox" id="pets" name="pets" onChange={handleChange}  />
                        Pets  </label> 
                    </div>

                </div>
            </div>
        </section>
    )
}
