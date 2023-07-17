import React from 'react'
import falcon from '../img/falcon.png'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <img src={falcon} alt='logo'></img>
            <h2 className='login'>Login</h2>

            <form>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an Account? <i><NavLink to='/register'>Register</NavLink></i></p>
        </div>
    </div>
  )
}
