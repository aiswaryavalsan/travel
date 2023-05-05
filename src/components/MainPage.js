import React from 'react'
import './MainPage.css'
const MainPage = (props) => {
  return (
    <>
    <div className={props.cName}>
    <img alt={props.altText} src={props.url}></img>
    <div className='mainText'>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <a  href="#" className={props.btncName}>plan your travel</a>
    </div>
    </div>
    </>
  )
}

export default MainPage