import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'><img src='../chat_logo.jpg' alt='logo'></img></span>
            <h2 className='register'>Register</h2>

            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='file' />
                <button type='submit'>Register</button>
            </form>
            <p>Already Have An Account? Login </p>
        </div>
    </div>
  )
}
