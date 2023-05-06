import React from 'react'

import './Destination.css'
import DestinationData from './DestinationData'
const Destination = () => {
  return (
    <>
    <div className='destination'>
    <div className='heading'>
    <h1>Popular Destinations</h1>
    <p>Tours Gives You An Oppurtunity to See Alot Within A Time Frame </p>
    </div>
    {DestinationData.map((item,index)=>{
      return(
       <>
      
       
       <div key={index} className={`firstDes ${index/2===0?'even':'odd'}`}>
       <div className='desText'>
       <h2>{item.title}</h2>
       <p>
      {item.text}
       </p>
       </div>
       <div  className='images'>
       <img alt='goa beach' src={item.image1}></img>
       <img alt='goa beach' src={item.image2}></img>
       </div>
       </div>
       
     
       
       
       </>
       
      
      
      )
     })}
     </div>
    </>
  )
}

export default Destination
