import './App.css';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/routes/Home';
import AboutUs from './components/routes/AboutUs';
import Service from './components/routes/Service';
import ContactUs from './components/routes/ContactUs';
function App() {
  return (
    <div className="App">
   
   
   <Routes>
  
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/about' element={<AboutUs/>}></Route>
   <Route path='/service' element={<Service/>}></Route>
   <Route path='/contact' element={<ContactUs/>}></Route>
   
   </Routes>
   </div>
      
   
  
    
  );
}

export default App;
