import React from 'react'




const StaffCard = () => {
    return (
        <div className=" h-auto w-[350px] rounded-lg bg-white flex m-4">
             <div>
             <h1 className='font-bold p-2'>Name : <span className='font-medium text-green-600'>Dhanashree Bhoyate</span></h1>
             <h1 className='font-bold p-2'>User : <span className='font-medium text-green-600'>Dhanashree </span></h1>
             <h1 className='font-bold p-2'>Email : <span className='font-medium text-green-600'>dhanashree@hospital.com </span></h1>
             <h1 className='font-bold p-2'>Contact No : <span className='font-medium text-green-600'>dhanashree@hospital.com </span></h1>
             <h1 className='font-bold p-2'>Specialization : <span className='font-medium text-green-600'> Cardiology</span></h1>
             {/* </div>
             <div> */}
             <h1 className='font-bold p-2'>Password : <span className='font-medium text-green-600'>Dhanashree </span></h1>
             <h1 className='font-bold p-2'>Profession : <span className='font-medium text-green-600'>Dhanashree Bhoyate</span></h1>
             <h1 className='font-bold p-2'>Qualification : <span className='font-medium text-green-600'>Dhanashree Bhoyate</span></h1>
             <h1 className='font-bold p-2'>Department : <span className='font-medium text-green-600'>Dhanashree Bhoyate</span></h1>
             <h1 className='font-bold p-2'>Role : <span className='font-medium text-green-600'>Dhanashree Bhoyate</span></h1>
            
             </div>
        </div>
    );
};


export default function Staff() {
  return (
   <>
   <h1 className='font-bold text-3xl  max-w-44 m-auto my-5'>Staff Data</h1>
   <div className='flex flex-wrap col-span-3'>
<StaffCard/>
<StaffCard/>
<StaffCard/>
<StaffCard/>
   </div>
   </>
  )
}
