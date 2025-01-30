import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './components/NavBarr'
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";
import "./App.css"
import GameList from './components/GameList';


function App() {
  return (
    <div className='Core'>
      <NavBarr/>
      <Routes>
        <Route path="/" element={ <GameList/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App