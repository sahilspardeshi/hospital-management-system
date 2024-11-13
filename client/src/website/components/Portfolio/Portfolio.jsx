import React from 'react'
import { useState } from "react";

export default function Portfolio({ advertisements }) {
    const [type, setType] = useState("All")

    console.log(advertisements)

    const [showAll, setShowAll] = useState(false); 

    const filterImages = () => {
        if (type === "All") {
            return advertisements;
        } else {
            return advertisements.filter((ad) => ad.title === type);
        }
    };

    const filteredImages = filterImages();

    const imagesToShow = showAll ? filteredImages : filteredImages.slice(0, 6);

    return (
        <>
            <div className=' py-10 '>
                <div>
                    <h1 className='font-semibold lg:text-4xl text-2xl text-center mb-3'>Our Portfolio</h1>
                </div>
                <div>
                    <ol className='flex tracking-wide mt-12 m-auto lg:w-screen justify-evenly'>
                        <li onClick={() => { setType("All"); }} className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>All</li>
                        <li onClick={() => { setType("Website Design"); }} className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>Website Design</li>
                        <li onClick={() => { setType("Mobile App"); }} className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>Mobile App</li>
                        <li onClick={() => { setType("Design Branding"); }} className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>Design Branding</li>
                        <li onClick={() => { setType("UI/UX"); }} className='mx-2 font-semibold text-sm lg:text-xl hover:text-blue-500 hover:scale-105 transition-transform duration-300'>UI/UX</li>
                    </ol>
                </div>

                <div className='w-11/12 flex flex-wrap mt-12 lg:max-w-screen-2xl m-auto'>
                    {
                        imagesToShow.map(
                            (data) => {
                                if (type === data.title) {
                                    return (
                                        <>
                                            <img src={data.imageUrl} className='h-60 lg:w-96 w-72 m-auto my-6 rounded-lg shadow-xl' />
                                        </>
                                    )
                                } else if (type == "All" && type != data.title) {
                                    return (
                                        <>
                                            <img src={data.imageUrl} className='h-60 lg:w-96 w-72 m-auto my-6 rounded-lg shadow-xl' />
                                        </>
                                    )
                                }

                            }
                        )
                    }

                </div>

                {filteredImages.length > 6 && !showAll && (
                    <div className='w-36 m-auto'>
                        <button
                            className='items-center rounded-lg py-2 px-8 mt-7 bg-green-500 text-white'
                            onClick={() => setShowAll(true)}
                        >
                            View More
                        </button>
                    </div>
                )}

              
                {showAll && (
                    <div className='w-36 m-auto'>
                        <button
                            className='items-center rounded-lg py-2 px-8 mt-7 bg-red-500 text-white'
                            onClick={() => setShowAll(false)}
                        >
                            View Less
                        </button>
                    </div>
                )}

              
            </div>
        </>
    )
}
