import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from '../src/components/Navigation/Navbar.jsx'
import './App.css'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Home from './Pages/Home/Home.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path ="*" element ={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
