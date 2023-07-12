import React from 'react'
import favicon from '../img/falcon.png'
import photo from '../img/popi.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='favicon'>
        <img src={favicon} alt='logo' />
        <p>Let's <br/>Chat</p>
      </div>

      <div className='profileinfo'>
        <img src={photo} alt='profilelogo' />
        <p className='profilename'>Popinder Singh</p>
        
      </div>
      <button className='logout'>Log Out</button>
    </div>
  )
}

export default Navbar
