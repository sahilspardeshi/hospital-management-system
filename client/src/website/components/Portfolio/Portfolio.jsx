import React from 'react'

export default function Portfolio() {
    const portfoliodata = [
        {
            pimg:"https://img.freepik.com/free-psd/health-care-landing-page_23-2148914947.jpg"
         },
         {
            pimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCqCDkkngql9FHbvGlClKSbS7vMcSdY0I2A&s"
         },
         {
            pimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyptWt8xeC2Y9ANZFKVyhBDdonSz5LuIILw&s"
         },
         {
            pimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCqCDkkngql9FHbvGlClKSbS7vMcSdY0I2A&s"
         },
         {
            pimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyptWt8xeC2Y9ANZFKVyhBDdonSz5LuIILw&s"
         },
         {
            pimg:"https://img.freepik.com/free-psd/health-care-landing-page_23-2148914947.jpg"
         }
    ]
    return (
        <>
            <div className=' py-10 '>
                <div>
                    <h1 className='font-semibold lg:text-4xl text-2xl text-center mb-3'>Our Portfolio</h1>
                </div>
                <div>
                    <ol className='flex tracking-wide mt-12 m-auto lg:w-3/4 justify-evenly'>
                        <li className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>All</li>
                        <li className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>Website Design</li>
                        <li className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>Mobile App</li>
                        <li className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>Design Branding</li>
                        <li className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>UI/UX</li>
                    </ol>
                </div>

                <div className='w-11/12 flex flex-wrap mt-12 lg:max-w-screen-2xl m-auto'>
                   {
                    portfoliodata.map(
                        (data)=>{
                            return(
                                <>
                                <img src={data.pimg} className='h-60 lg:w-96 w-72 m-auto my-6 rounded-lg shadow-xl'/>
                                </>
                            )
                            
                        }
                    )
                   }
                   
                </div>
                <div className=' w-36 m-auto'>
        <button className=' items-center rounded-lg py-2 px-8 mt-7 bg-green-500 text-white'>View More</button>
        </div>
            </div>
        </>
    )
}
