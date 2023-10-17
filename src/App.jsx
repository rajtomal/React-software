import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Home/Navbar/Navber'
import Banner from './Home/Banner/Banner'

function App() {

  return (
    <>
      <div>
        <Navber></Navber>
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
