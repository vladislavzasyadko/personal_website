import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app_wrapper'>
      <Header />
      <Home />
      <About />
      <Works />
      <Contact />
      {/* <Nav /> */}
    </div>
  );
}

export default App;
