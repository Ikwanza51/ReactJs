import React from 'react'
import popi from '../img/popi.jpg'

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <form className='searchForm'>
        <input type='text' placeholder='Search User' />
      </form>
      <div className='userSearched'>
        <img src={popi} alt="dp" />
        <span>Ashish Verma</span>
      </div>
    </div>
  )
}

export default Searchbar