import React from 'react'
import img from "../Assets/garden.jpeg"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className=' w-full h-screen flex '>
      <div className=' grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-xl'>
        <div className=' w-full h-[550px] hidden md:block '>
          <img src={img} alt=""  className='w-full h-full rounded-l-xl' />
        </div>
        <div className=' flex flex-col justify-center px-4 '>
            <h1 className=' pt-2 text-4xl mb-4 font-bold text-center'>Dreamy Flower</h1>
             <form>
            <div className=' flex flex-col gap-3'>
             <input type="text" name="" placeholder='username' className=' border p-2 shadow-md focus:outline-none' />
             <input type="password" name="" placeholder='password' className='border p-2 shadow-md focus:outline-none ' />
            </div>
            <button className=' w-full font-bold bg-teal-900 py-3 my-2 rounded text-gray-300  hover:opacity-90 hover:text-white'>Login </button>
            <div>
              
              <p>Create a <Link to="/register" className=' text-blue-600'>New Acoount</Link> </p>
              </div>
              </form>
      
        </div>
      </div>

    </div>
  )
}

export default Login