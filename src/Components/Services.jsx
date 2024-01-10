import React from 'react';
import img1 from "../Assets/wedding.jpeg"
import img2 from "../Assets/garden.jpeg"
import img3 from "../Assets/coustpmize.jpeg"
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';


const servicesData = [
    {
      id: 1,
      img: img1,
      title: "Event Arrangements",
      description: "our expert florists will transform your wedding into an enchanting and unforgettable celebration.",
      link: 'See Products',
      click : '/event'
    },
    {
      id: 2,
      img: img2,
      title: "Home Garden ",
      description: "Elevate your home with the beauty of nature.From selecting the perfect plants to designing aesthetically pleasing arrangements, we turn your living space into a haven of greenery and tranquility",
      link: 'See Products',
      click : '/garden'
    },
    {
      id: 3,
      img: img3,
      title: "Custom Bouquets",
      description: "Our custom bouquet service allows you to convey your unique style and sentiments through carefully crafted arrangements. Each bloom is selected with precision, ensuring your bouquet is a one-of-a-kind masterpiece.",
      link: 'See Products',
      click : "/custom"
    }];


const Services = () => {
  const navigate =  useNavigate();
  return (
    <div name='/Service' className='h-full w-screen flex  flex-col items-center justify-center  py-20'>
        <div className='container  '>
            <div className=' text-center mb-20  max-w-[400px] mx-auto '>
                <h1 className='text-3xl font-bold'>Our Services</h1>
                <p className=' text-xs text-gray-800 leading-5'>
                Here are some potential services 
                </p>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-3 cursor-pointer px-10 gap-5 md:gap-10 place-content-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.5)]'>
            {servicesData.map((menu,{ id, img, title, description, link,click}) => (
                <div  key={menu.id} className="  rounded-3xl border-2 border-lime-900 bg-lime-200 hover:bg-pink-200 hover:border-2 hover:border-pink-800 shadow-lg  group max-w-[300px] relative " >
                  <img
                    src={menu.img}
                    alt=""
                    className=" block mt-10  mx-auto transform-translate-y-14 h-[220px] w-[150px] object-cover rounded-md group-hover:scale-105  duration-500 shadow-md"
                  />
                  <div className=' text-center px-5 '>
                    <h3 className="font-semibold">{menu.title}</h3>
                    <p className="pb-10 text-sm text-gray-700">{menu.description}</p>
                       <ul>
                    <li key={menu.id} onClick={() => { navigate(`${menu.click}`) }}>
              
                {menu.link}
            
            </li></ul>


                    {/* <li className="font-semibold"> <Link to={menu.click} smooth={true} >{menu.link}</Link></li> */}
                    <div className="flex items-center  justify-center gap-1 mb-10 ">
                        {/* <button className='  px-5 py-2'>more info</button> */}
                     
                     
                    </div>
                  </div>
                </div>
              ))}  
              

             
            

            </div>

        
        </div>     
        <div className=' flex items-center justify-center rounded-full px-20 leading-10 hover:border-2 border-teal-950 bg-teal-950 mt-10 hover:text-teal-950 hover:bg-transparent opacity-90'>
              <button onClick={() => { navigate("/Products") }} className=' '> Products</button> 

        </div>
        
    </div>
  )
}

export default Services