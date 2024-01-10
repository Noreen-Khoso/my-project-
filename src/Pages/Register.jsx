import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='/register'>
        <div className=' w-full h-screen flex '>
      <div className=' flex items-center m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        
        <div className=' flex flex-col justify-center px-4 '>
            <h1 className=' pt-2 text-4xl mb-4 font-bold text-center'>Create New Account</h1>
             <form>
            <div className=' flex flex-col gap-3'>
             <input type="text" name="" placeholder='username' className=' border p-2 shadow-md focus:outline-none' />
             <input type="email" name="" placeholder='email' className=' border p-2 shadow-md focus:outline-none' />
             <input type="password" name="" placeholder='password' className='border p-2 shadow-md focus:outline-none ' />
             <input type="password" name="" placeholder='Confirm password' className='border p-2 shadow-md focus:outline-none ' />
            </div>
            <button className=' w-full font-bold bg-teal-900 py-3 my-2 rounded text-gray-300  hover:opacity-90 hover:text-white'>Login </button>
            <div>
              
              <p>Already have an Account? <Link to="/login" className=' text-blue-600'>Login</Link> </p>
              </div>
              </form>
      
        </div>
      </div>

    </div>
    </div>
  )
}

export default Register