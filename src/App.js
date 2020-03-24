import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className='app_wrapper'>
      <HeaderContainer />
      <Home />
      <About />
      <Works />
      <Contact />
      {/* <Nav /> */}
    </div>
  );
}

export default App;
