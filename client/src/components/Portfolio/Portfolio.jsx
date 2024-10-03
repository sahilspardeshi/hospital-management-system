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
                    <h1 className='font-semibold text-5xl text-center mb-3'>Our Portfolio</h1>
                </div>
                <div>
                    <ol className='flex tracking-wide mt-16 m-auto w-3/4 justify-evenly'>
                        <li className='font-semibold text-xl'>All</li>
                        <li className='font-semibold text-xl'>Website Design</li>
                        <li className='font-semibold text-xl'>Mobile App</li>
                        <li className='font-semibold text-xl'>Design Branding</li>
                        <li className='font-semibold text-xl'>UI/UX</li>
                    </ol>
                </div>
                <div className=' flex flex-wrap mt-12 w-3/4 m-auto'>
                   {
                    portfoliodata.map(
                        (data)=>{
                            return(
                                <>
                                <img src={data.pimg} className='h-52 w-80 m-4 rounded-lg shadow-xl'/>
                                </>
                            )
                            
                        }
                    )
                   }
                </div>
            </div>
        </>
    )
}
