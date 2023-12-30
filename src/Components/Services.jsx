import React from 'react';
import img1 from "../Assets/wedding.jpeg"
import img2 from "../Assets/garden.jpeg"
import img3 from "../Assets/coustpmize.jpeg"

const servicesData = [
    {
      id: 1,
      img: img1,
      title: "Event Arrangements",
      description: "our expert florists will transform your wedding into an enchanting and unforgettable celebration.",
    },
    {
      id: 2,
      img: img2,
      title: "Home Garden ",
      description: "Elevate your home with the beauty of nature.From selecting the perfect plants to designing aesthetically pleasing arrangements, we turn your living space into a haven of greenery and tranquility",
    },
    {
      id: 3,
      img: img3,
      title: "Custom Bouquets",
      description: "Our custom bouquet service allows you to convey your unique style and sentiments through carefully crafted arrangements. Each bloom is selected with precision, ensuring your bouquet is a one-of-a-kind masterpiece.",
    }];


const Services = () => {
  return (
    <div className='mb-12 mt-14'>
        <div className='container'>
            <div className=' text-center mb-20 max-w-[400px] mx-auto'>
                <h1 className='text-3xl font-bold'>Our Services</h1>
                <p className=' text-xs text-gray-800 leading-5'>
                Here are some potential services 
                </p>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-3 cursor-pointer px-10 gap-5 md:gap-10 place-content-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.5)]'>
            {servicesData.map(({ id, img, title, description }) => (
                <div key={id} className=" space-y-10 rounded-3xl bg-slate-200 hover:bg-transparent hover:border-1 border-slate-500 shadow-xl duration-200 group max-w-[300px] relative ">
                  <img
                    src={img}
                    alt=""
                    className=" block mt-10  mx-auto transform-translate-y-14 h-[220px] w-[150px] object-cover rounded-md group-hover:scale-105  duration-500 shadow-md"
                  />
                  <div className=' text-center px-5 '>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="pb-10 text-sm text-gray-700">{description}</p>
                    <div className="flex items-center  justify-center gap-1 mb-10 ">
                        <button className=' bg-slate-700 px-5 py-2'>more info</button>
                     
                     
                    </div>
                  </div>
                </div>
              ))}
            

            </div>

        </div>
        
        
    </div>
  )
}

export default Services