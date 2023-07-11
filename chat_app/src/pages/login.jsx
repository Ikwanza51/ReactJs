import React from 'react'
import falcon from '../img/falcon.png'

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
            <p>Don't have an Account? <i>Register</i></p>
        </div>
    </div>
  )
}
