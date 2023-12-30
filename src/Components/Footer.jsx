import React from 'react'

import { FaLocationDot, FaWhatsapp, FaFacebookF, FaInstagram, FaFacebookMessenger } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className=' '>
        <div className=' container py-2'>
            <div className=' flex flex-col items-center gap-10 '>
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5  ' >
                    <div className=' flex justify-center items-center py-5  gap-2  px-10 '>
                      <FaLocationDot size={30}/>
                        <div className='items-center flex-col'>

                      <h1 className=' text-xl font-bold'>Address</h1>
                      <p> Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center gap-2 py-5 px-10 '>
                      <FaWhatsapp size={30}/>
                        <div className='items-center flex-col'>

                      <h1 className=' text-xl font-bold'>Whatsapp</h1>
                      <p> +92 000 000 0000</p>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center py-5 gap-2 px-10 '>
                      <MdEmail size={30}/>
                        <div className='items-centerflex-col'>

                      <h1 className=' text-xl font-bold'>Mail</h1>
                      <p> xyz@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-1 gap-10 items-center '>
                    <FaInstagram size={30}/>
                    <FaFacebookF size={30}/>
                    <FaFacebookMessenger size={30} />
                    <BiLogoGmail size={30} />

                </div>
            </div>
                </div>
                <div className=' conatiner flex justify-center items-center py-5 bg-black w-screen'>
                    <p className=' text-sm md:text-lg text-gray-400 text-center font-semibold'>
                        Dreamy Flower @2023 All Rights Reserved
                    </p>

        </div>


    </div>
  )
}

export default Footer