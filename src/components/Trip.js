import React from 'react'
import TripData from './TripsData'
import './Trip.css'
const Trip = () => {
  return (
    <div className='trip'>
    <h1>Recent Trips</h1>
    <p>You can discover unique destinations using google map</p>
    <div className='tripcard'>
      {TripData.map((item)=>{
        return(
          <>
        
          <div className='t-card'>
          <div className='t-image'>
          <img alt={item.alt} src={item.image}/>
          </div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          </div>
          
          </>  
        )
      })}
      </div>
    </div>
  )
}

export default Trip
