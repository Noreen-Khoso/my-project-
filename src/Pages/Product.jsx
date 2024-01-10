import React from 'react'
import EventServiceProducts from '../Components/EventServiceProducts'
import GardenServicesProducts from '../Components/GardenServicesProducts'
import CustomServicesProducts from '../Components/CustomServicesProducts'

const Product = () => {
  return (

    <div name='/Products' className=' w-screen pt-20'>
      <div className='min-h-screen flex flex-col items-center lg:px-10 px-20 md:gap-5 '>
        <h1 className='text-3xl sm:text-4xl font-bold text-black  md:py-5'>Products</h1>




        <div className=' h-full w-screen bg-gray-200 flex flex-wrap items-center gap-4'>
          <EventServiceProducts />

        </div>
        <div className=' h-full w-screen bg-gray-200 flex flex-wrap items-center gap-4'>
          <GardenServicesProducts/>

        </div>
        <div className=' h-full w-screen bg-gray-200 flex flex-wrap items-center gap-4'>
          <CustomServicesProducts/>

        </div>
        

      </div>

    </div>
  )
}

export default Product