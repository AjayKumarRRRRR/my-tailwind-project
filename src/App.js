import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'

function App () {

  const [activePage, setActivePage] = useState('home');
  const handlePageChange = (page) => {
    setActivePage(page);
  }

  return (
    <>
    <Navbar onPageChange={handlePageChange} />
   {activePage === 'home' &&  <Home /> } 
   {activePage === 'about' && <About /> }
    </>
  )
}

export default App