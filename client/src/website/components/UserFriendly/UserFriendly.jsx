import uparrow from '../../assets/images/uparrow.png'

export default function UserFriendly() {
  return (
    <div className='py-10'>
      <div>
        <h1 className='font-semibold text-3xl text-center mb-3'>User-Friendly Software</h1>
        <p className='text-center text-gray-500'>Let's see what our satisfied users say</p>
      </div>
      <div className='flex flex-col lg:flex-row m-auto mt-10 px-5 lg:px-10'>
        <div className='lg:p-8 '>
          <h1 className='font-bold lg:text-5xl text-3xl'>What Makes Us<br /> Different</h1>
          <p className='lg:mr-24 my-10 font-semibold text-xl text-gray-500 mb-3'>Our healthcare management software streamlines operations and enhances patient care, providing features that make managing hospitals, clinics, and medical practices simpler and more effective.</p>
          <button className='bg-black text-white lg:text-xl flex py-3 px-5 mt-10 rounded-3xl font-bold'>See More <img src={uparrow} className='h-5 ml-1 mt-1' /></button>
        </div>

        <div className='lg:pt-1 pt-16'>
          <h2 className='text-pink-500 font-bold text-xl'>01.</h2>
          <hr />
          <h1 className='font-bold text-xl'>Centralized Patient Data Management</h1>
          <p className='font-semibold text-lg text-gray-500 mb-3'>Our system provides a single source of truth for patient data, ensuring all information is securely stored, easily accessible, and up-to-date for healthcare professionals. Say goodbye to fragmented and disjointed records.</p>

          <h2 className='text-green-500 font-bold text-xl'>02.</h2>
          <hr />
          <h1 className='font-bold text-xl'>Automated Appointment Scheduling</h1>
          <p className='font-semibold text-lg text-gray-500 mb-3'>With built-in scheduling features, your patients can book, reschedule, and receive reminders automatically. Reduce administrative workload and eliminate scheduling conflicts for smoother hospital operations.</p>

          <h2 className='text-orange-500 font-bold text-xl'>03.</h2>
          <hr />
          <h1 className='font-bold text-xl'>Real-Time Analytics and Reporting</h1>
          <p className='font-semibold text-lg text-gray-500 mb-3'>Gain actionable insights with real-time analytics that track patient flow, resource usage, and operational efficiency. Our customizable dashboards make it easy to visualize critical data for better decision-making.</p>

          <h2 className='text-yellow-500 font-bold text-xl'>04.</h2>
          <hr />
          <h1 className='font-bold text-xl'>Seamless Integration with Medical Devices</h1>
          <p className='font-semibold text-lg text-gray-500 mb-3'>Our software integrates with various medical devices, ensuring that patient vitals and diagnostic results are automatically captured and added to their records. This reduces human error and increases the accuracy of medical data.</p>
        </div>
      </div>
    </div>
  )
}
