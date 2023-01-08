import React from 'react';
import Navbar from "./components/Navbar";
import image from "./components/kunda.jpg";
import { Route, Routes, Switch} from "react-router-dom";
import About from "./components/About";
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Home from './components/Home';
import Specialities from './components/Specialities';

 function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break;
  case "/about":
    component = <About />
    break;
    case "/appointment":
    component = <Appointment />
    break;

    case "/contact":
    component = <Contact />
    break;
    case "/home":
    component = <Home />
    break;

    case "/specialities":
    component = <Specialities />
    break;
 }

  return (
    <><><div style={{ backgroundImage: `url(${image})` }} /><Navbar />
    {component}
    </>
    
    {/* <Routes>
     
     <Route  path="/components/About" component={About}/>
    </Routes></> */}
     </>
  );
};

export default App;
