import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './components/routes/Home';
import AboutUs from './components/routes/AboutUs';
import Service from './components/routes/Service';
import ContactUs from './components/routes/ContactUs';
import SignUp from './components/routes/SignUp';
import Login from './components/routes/Login';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
function App() {
  const ctx=useContext(AuthContext);
  
  console.log(ctx.isLogged);

  return (
    <div className="App">
   
   
   <Routes>
  
  <Route path='/' exact element={<SignUp></SignUp>}/>
  <Route path='/home' element={ctx.isLogged?<Home></Home>:<Navigate to={'/login'}/>}></Route>
  <Route path='/about' element={ctx.isLogged?<AboutUs/>:<Navigate to='/Login'/>}></Route>
  <Route path='/service' element={ctx.isLogged?<Service/>:<Navigate to='/Login'/>}></Route>
  <Route path='/contact' element={ctx.isLogged?<ContactUs/>:<Navigate to='/Login'/>}></Route>
   <Route path='/login'  element={!ctx.isLogged?<Login></Login>:<Navigate to='/home'/>}/>
   
   </Routes>
   </div>
      
   
  
    
  );
}

export default App;
