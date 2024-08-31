import React from 'react'
import './navbar.css'
import Timepiece from './Timepiece'
function Navbar() {
  return (
    <>

      <navbar className='navbar'>
        To-Do list
      </navbar>
      <div className='time-holder'>
      <Timepiece />
      </div>
      


    </>


  )
}

export default Navbar