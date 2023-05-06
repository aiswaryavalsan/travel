import React from 'react'
import MainPage from '../MainPage'
import NavBar from '../NavBar'
import Destination from '../Destination'
import Trip from '../Trip'
import Footer from '../Footer'
const Home = () => {
  return (
<>
<NavBar/>
<MainPage cName="homePage"
 altText="image" 
 url="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
   title="Your Journey Your Story" text="choose your favourate destination" btncName='show'>
   </MainPage>
   <Destination></Destination>
   <Trip></Trip>
 <Footer></Footer>
 </>
  )
}

export default Home
