import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, getstaffdata } from '../../redux/actions/StaffProfileAction';
import ProfileForm from './PopUpProfile';

export default function Staff() {
  const [showModal, setShowModal] = useState(false); 
  const [selectedProfile, setSelectedProfile] = useState(null);
  const dispatch = useDispatch();

  const state = useSelector(state => state);
  // console.log("allstates", state); 


  const { profile } = useSelector((state) => state.profile);

const handleDelete = async (profile) =>{
  console.log("Staff" , profile)
  const id = profile.id;
  dispatch(deleteProfile(id));
  window.location.reload()
}

const handleUpdate = (data) => {
  setSelectedProfile(data); 
  setShowModal(true);
};

  useEffect(() => {
    console.log("getstaffdata called")
    dispatch(getstaffdata());
  }, [dispatch]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      <h1 className="font-bold text-3xl max-w-44 m-auto my-5">All Staff </h1>
    <div>
    {/* <input type='search' placeholder='Search ' className='w-[320px] h-10 mx-8 p-3'/> */}
    </div>
    <div className=' overscroll-x-auto w-[1000px]'>
    <table border={1} className='border border-slate-500 bg-white overflow-x-auto'>
      <thead >
        <tr>
          <th className='border border-slate-500 px-3 py-3'>Sr.No</th>
          <th className='border border-slate-500 px-3 py-1'>Name</th>
          <th className='border border-slate-500 px-3'>User</th>
          <th className='border border-slate-500 px-3'>Email</th>
          <th className='border border-slate-500 px-3'>Contact No</th>
          <th className='border border-slate-500 px-3'>Specialization</th>
          <th className='border border-slate-500 px-3'>Profession</th>
          <th className='border border-slate-500 px-3'>Qualification</th>
          <th className='border border-slate-500 px-3'>Department</th>
          <th className='border border-slate-500 px-3'>Role</th>
          <th className='border border-slate-500 px-3'>Action</th>
        </tr>
      </thead>
      <tbody>
      {profile && profile.length > 0 ? (
        profile.map((data, index) => (
          <tr key={index}>
            <td className="text-center border border-slate-500 px-3 py-1">{index + 1}</td>
            <td className="border border-slate-500 px-3 py-1">{data.fullName}</td>
            <td className="border border-slate-500 px-3 py-1">{data.user}</td>
            <td className="border border-slate-500 px-3 py-1">{data.email}</td>
            <td className="border border-slate-500 px-3 py-1">{data.contact_number}</td>
            <td className="border border-slate-500 px-3 py-1">{data.specialization}</td>
            <td className="border border-slate-500 px-3 py-1">{data.type}</td>
            <td className="border border-slate-500 px-3 py-1">{data.qualifications}</td>
            <td className="border border-slate-500 px-3 py-1">{data.department}</td>
            <td className="border border-slate-500 px-3 py-1">{data.role}</td>
            {/* <td className="border border-slate-500 px-3 py-1 cursor-pointer " onClick={() => handleUpdate(data)}>EDIT</td> */}
            <td className="border border-slate-500 px-3 py-1 cursor-pointer ">  <button 
            className="px-4 py-2 bg-green-400 text-white font- rounded-md hover:bg-green-600"
            onClick={() => handleUpdate(data)}>EDIT </button></td>
            {/* <td className="border border-slate-500 px-3 py-1 cursor-pointer" onClick={() => handleDelete(data)}>delete</td> */}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="11" className="text-center py-2">No profiles available</td>
        </tr>
      )}
    </tbody>
    </table>
    </div>
      {/* <div className="flex flex-wrap">
        {profile && profile.length > 0 ? (
          profile.map((data) => (
            <div key={data.id} className="h-auto w-[350px] rounded-lg bg-white flex m-4 relative group" >
              <div className='w-[350px] '>
                
                  <h1 className="font-bold text-center p-3 text-red-400 text-xl">{data.fullName}</h1>
              
                <h1 className="font-bold p-2">
                  User : <span className="font-medium text-green-600">{data.user}</span>
                </h1>
                <h1 className="font-bold p-2">
                  Email : <span className="font-medium text-green-600">{data.email}</span>
                </h1>
                <h1 className="font-bold p-2">
                  Contact No : <span className="font-medium text-green-600">{data.contact_number}</span>
                </h1>
                <h1 className="font-bold p-2">
                  Specialization : <span className="font-medium text-green-600">{data.specialization}</span>
                </h1>
             
                <h1 className="font-bold p-2">
                  Profession : <span className="font-medium text-green-600">{data.type}</span>
                </h1>
                <h1 className="font-bold p-2">
                  Qualification : <span className="font-medium text-green-600">{data.qualifications}</span>
                </h1>
                <h1 className="font-bold p-2">
                  Department : <span className="font-medium text-green-600">{data.department}</span>
                </h1>
                <h1 className="font-bold p-2">
                  Role : <span className="font-medium text-green-600">{data.role}</span>
                </h1>
                <div className="absolute bottom-1 p-6 rounded-lg flex justify-evenly opacity-0 group-hover:opacity-100 m-1 bg-purple-50 transition-opacity duration-300 w-[340px]">
          <button 
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            onClick={() => handleUpdate(data)}
          >
            Update
          </button>
          <button 
            className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600"
            onClick={() => handleDelete(data)}
          >
            Delete
          </button>
        </div>
              </div>
            </div>
            
          ))
        ) : (
          <p>No staff data available</p>
        )}
      </div> */}

      {showModal && selectedProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
            <ProfileForm selectedProfile={selectedProfile} setShowModal={setShowModal} />
          </div>
        </div>
      )}

    </>
  );
}
