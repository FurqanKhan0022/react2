import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Services from './Component/Services';

import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      
      <Services />
  
      <Project />
      <Contact />
    </div>
  );
}

export default App;
