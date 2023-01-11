import React from 'react';
import Navbar from "./components/Navbar";
import image from "./components/kunda.jpg";


 function App() {
  
  return (
    <><div style={{ backgroundImage: `url(${image})` }} /><Navbar /></>
    
  );
};

export default App;
