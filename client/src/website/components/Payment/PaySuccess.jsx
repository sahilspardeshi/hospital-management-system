import React from 'react'

export default function PaySuccess() {
  return (
    <>
    <div className=' w-screen items-center h-screen m-auto py-20 bg-purple-50 '>
      <div className="relative w-24 m-auto my-16 h-24 flex items-center justify-center bg-green-500 rounded-full ">
        <div className="animate-ping absolute w-full h-full rounded-full bg-green-300 opacity-75 "></div>
        <div className="animate-ping absolute w-full h-full rounded-full bg-green-400 opacity-25 "></div>
        <div className="animate-ping absolute w-full h-full rounded-full bg-green-500 opacity-50 "></div>
        <h1 className='text-5xl text-white'> ✓</h1>
        <div className="animate-ping absolute w-full h-full rounded-full bg-green-700 opacity-25 "></div>
        <div className="animate-ping absolute w-full h-full rounded-full bg-green-600 opacity-25 "></div>
      </div>
      <div className=' w-2/6 m-auto text-center text-xl font-bold space-y-2 '>
        <h1>Payment Successfull</h1>
        <h1>transaction Number : 1234567</h1><br/>
        <hr className='border border-spacing-2 border-gray-400'/>
        <h1>Amount Paid:$599</h1>
        <h1>Paid By PayPal</h1>
      </div>
      </div>
    </>
  )
}
