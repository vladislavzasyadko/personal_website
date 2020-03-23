import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className='app_wrapper'>
      <Home />
      <About />
      <Works />
      <Contact />
      <Nav />
    </div>
  );
}

export default App;
