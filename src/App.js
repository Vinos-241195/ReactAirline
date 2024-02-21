import React from "react"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Bookingdetails from "./Bookingdetails"
import About from "./About"
import Content from "./Content"
import Login from "./Login"
import Ticketbooking from "./Ticketbooking"
import Contactus from "./Contactus"

const App=()=> {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/details' element={<Bookingdetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/booking' element={<Ticketbooking/>}/>
          <Route path="/contact" element={<Contactus/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
