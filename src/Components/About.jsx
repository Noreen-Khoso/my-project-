import React from 'react';
import shop from "../Assets/shop.jpeg"
import { CgLastpass } from 'react-icons/cg'

const About = () => {
    return (
        <>
            <div className=' '>
            <div className='py-20'>
            <div className=' container '>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center px-10'>
                    <div>
                    <img src={shop} alt="shop" className=' max-w-[400px] block mx-auto h-[350px] w-[70%] drop-shadow-[-5px_5px_10px_rgba(0,0,0,1.0)] object-cover'/>
                    </div>
                    <div className=' container px-5'>
                        <h1 className='text-3xl sm:text-4xl font-bold pt-5  '>Dreamy Flower </h1>
                        < p className='pt-4 text-sm text-gray-700 tracking-wide leading-5'>
                        Welcome to our world of exceptional services! <br/>
                        We pride ourselves on delivering excellence tailored to your needs. 
                        Your satisfaction is our priority, making every service with us an unforgettable journey. Embrace the extraordinary <br/>
                        where your desires meet our commitment to excellence."
                        </p>
                       
                    </div>

                </div>
            </div>
        </div>
            </div>

        </>
    )
}

export default About