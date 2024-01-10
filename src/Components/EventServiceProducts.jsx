import React from 'react'
import BUtton from '../Components/BUtton'
import flower from "../Assets/wedding.jpeg"

const EventServiceProducts = () => {
    return (

        <div name="/event" className='h-full w-screen flex flex-col justify-center pt-20 py-10 px-10 '>
            <h1 className='text-3xl sm:text-4xl font-bold text-black px-5 py-2 '>Events Arrangments </h1>
            <div className=' flex flex-wrap items-center gap-4'>
                <div name="/event" className=' lg:w-1/4 p-5  shadow-[rgba(_0,_0,_0,0.24)_12px_13px_10px] rounded-lg flex flex-col justify-center items-center'>
                    <img src={flower} alt="img" className='rounded-lg' />
                    <div className='space-y-5'>
                        <h3 className=' text-xl text-center pt-6 font-semibold'>Event Flower</h3>
                        <div className=' flex flex-row items-center gap-4 '>
                            <h3 className=' font-semibold text-lg'>Rs: 400</h3>
                            <BUtton text="Order" />
                        </div>





                    </div>
                </div>

                <div className=' lg:w-1/4 p-5  shadow-[rgba(_0,_0,_0,0.24)_12px_13px_10px] rounded-lg flex flex-col justify-center items-center'>
                    <img src={flower} alt="img" className='rounded-lg' />
                    <div className='space-y-5'>
                        <h3 className=' text-xl text-center pt-6 font-semibold'>Event Flower</h3>
                        <div className=' flex flex-row items-center gap-4 '>
                            <h3 className=' font-semibold text-lg'>Rs: 400</h3>
                            <BUtton text="Order" />
                        </div>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventServiceProducts