import React from 'react'
import girl from "../Assets/girl.jpeg"

const Reviews = () => {
    return (
        <>

            <div className='py-10 px-10 md:px-5'>
                <div className=' container '>
                    <div className="text-center mb-10 max-w-[600px] mx-auto">

                        <h1 className="text-4xl font-bold">Reviews</h1>
                        <p className="text-2xl text-gray-800 leading-10">
                            what our customers say

                        </p>
                    </div>
                    <div className=' flex flex-wrap gap-10 items-center justify-center '>

                    <div className=' flex flex-col py-5 px-10 space-y-10 rounded-3xl bg-slate-200 hover:bg-transparent hover:border-1 border-slate-500 shadow-xl duration-200 group max-w-[300px] relative '>
                        <img src={girl} alt="" className=' h-20 w-20 rounded-full object-cover' />
                        <p className=' text-xl font-xl text-slate-700'> 
                        
                        
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim 
                        </p>
                        <h1 className=' text-end text-2xl font-bold'>-xyz </h1>

                    </div>
                    <div className=' flex flex-col py-5 px-10 space-y-10 rounded-3xl bg-slate-200 hover:bg-transparent hover:border-1 border-slate-500 shadow-xl duration-200 group max-w-[300px] relative '>
                        <img src={girl} alt="" className=' h-20 w-20 rounded-full object-cover' />
                        <p className=' text-xl font-xl text-slate-700'> 
                        
                        
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim 
                        </p>
                        <h1 className=' text-end text-2xl font-bold'>-xyz </h1>

                    </div>
                    <div className=' flex flex-col py-5 px-10 space-y-10 rounded-3xl bg-slate-200 hover:bg-transparent hover:border-1 border-slate-500 shadow-xl duration-200 group max-w-[300px] relative '>
                        <img src={girl} alt="" className=' h-20 w-20 rounded-full object-cover' />
                        <p className=' text-xl font-xl text-slate-700'> 
                        
                        
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim 
                        </p>
                        <h1 className=' text-end text-2xl font-bold'>-xyz </h1>

                    </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Reviews