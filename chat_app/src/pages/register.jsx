import React from 'react'
import avatar from '../img/avatar.jpg'
import falcon from '../img/falcon.png'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <img src={falcon} alt='logo'></img>
            <h2 className='register'>Register</h2>

            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input style={{display:'none'}} type='file' id='file'/>
                <label htmlFor="file">
                  <img src={avatar} alt='icon'></img>
                  <span>Add Avatar</span>
                </label>
                <button type='submit'>Register</button>
            </form>
            <p>Already have an Account? <i>Login</i></p>
        </div>
    </div>
  )
}
