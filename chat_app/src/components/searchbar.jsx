import React from 'react'
import popi from '../img/popi.jpg'

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className='searchForm'>
        <input type='text' placeholder='Search User' />
      </div>
      <div  style={{display:'none'}} className='userSearched'>
        <img src={popi} alt="dp" />
        <span>Ashish Verma</span>
      </div>
    </div>
  )
}

export default Searchbar