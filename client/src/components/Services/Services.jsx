import React from 'react'
import lab from '../../assets/images/lab.png'
import ambulance from '../../assets/images/ambulance.png'
import appointment from '../../assets/images/appointment.png'
import call from '../../assets/images/call.png'

export default function Services() {
  const servicedata = [
    {
      img:lab,
      des:"Well equiped lab"
    },
    {
      img:ambulance,
      des:"Emergency Ambulance"
    },
    {
      img:appointment,
      des:"Online Appointment"
    },
    {
      img:call,
      des:"Call Center"
    }
    
  ]
  return (
    <>

    <div className='bg-red-50 py-10'>
    <div>
    <h1 className='font-semibold text-3xl text-center mb-3'>Our Medical Services</h1>
    <p className='text-center text-gray-500 '>We are dedicated to serve you <br/> best medical services</p> 
    </div>
    <div className='flex flex-wrap justify-evenly w-2/3 m-auto my-5 '>
    {
      servicedata.map(
        (data)=>{
          return(
            <>
            <div className='w-52 border rounded-2xl p-5 shadow-lg bg-white my-5 hover:bg-yellow-200 hover:text-white '>
              <img src={data.img} className='h-16 m-auto mb-5'/>
              <p className='text-green-700 hover:text-white text-center'>{data.des}</p>
            </div>
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
