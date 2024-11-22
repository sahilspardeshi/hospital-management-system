import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axiosInstanceApp from '../../axiosConfig';
import { FaUserCheck, FaUserEdit } from 'react-icons/fa';

const inputClasses = "border border-gray-300 font-bold text-gray-500 rounded-lg p-2";
const buttonClasses = "text-primary hover:underline hover:text-blue-600";
const labelClasses = "block text-muted-foreground mb-2";
const flexClasses = "flex justify-between items-center mb-6";
const radioClasses = "flex items-center";

const Showprofile = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile);


  useEffect(() => {
    console.log("getstaffdata called")
    dispatch(getstaffdata());
  }, [dispatch]);

  // console.log("currentUser", user)

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    mobile: user.mobile || '',
    gender: user.gender || '',
    dob: user.dob ? new Date(user.dob).toISOString().split('T')[0] : '',
  });



  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        gender: user.gender || '',
        dob: user.dob ? new Date(user.dob).toISOString().split('T')[0] : '',
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem('authToken');
    const userId = user._id;

    try {
      const response = await axiosInstanceApp.put(`staff/update/${userId}`, formData, {
        headers: {
          Authorization: Bearer` ${token}`,
        },
      });
      console.log("updater user", response)
      toast.success('Profile updated successfully!');
      setIsEditing(false);
      setFormData(response.data);
    }catch(error) {
      toast.error('Failed to update profile!');
      console.error('Error updating profile:', error);
    }
  };

  const toggleEdit = () => setIsEditing((prev) => !prev);

  

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    try {
      if (confirmDelete) {
        const response = await axiosInstanceApp.delete(`staff/delete/${user._id}`)

        toast.success('Account deleted successfully!');
        console.log("user delted", response)
        localStorage.removeItem('authToken');
        navigate("/")
        window.location.reload()
      }
    } catch (e) {
      console.log(e)
      toast.error('Failed to delete account!');
    };
  }



  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-card-foreground rounded-lg shadow-md">
      <div className={flexClasses}>
        <h2 className="text-xl font-semibold">Profile Information</h2>
        <button className={buttonClasses} onClick={isEditing ? handleSave : toggleEdit}>
          {isEditing ? <FaUserCheck className='text-green-500 text-xl' /> : <FaUserEdit className='text-orange-500 text-xl' />}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className={inputClasses}
          readOnly={!isEditing}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className={inputClasses}
          readOnly={!isEditing}
        />
      </div>
      <div className="mb-6">
        <label className={labelClasses}>Gender</label>
        <div className="flex items-center space-x-4">
          <label className={radioClasses}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleInputChange}
              className="mr-2"
              disabled={!isEditing}
            />
            Male
          </label>
          <label className={radioClasses}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleInputChange}
              className="mr-2"
              disabled={!isEditing}
            />
            Female
          </label>
        </div>
      </div>
      <div className={flexClasses}>
        <h2 className="text-xl font-semibold">Email Address</h2>
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className={`${inputClasses} w-full mb-6`}
        readOnly={!isEditing}
      />
      <div className={flexClasses}>
        <h2 className="text-xl font-semibold">Mobile Number</h2>
      </div>
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleInputChange}
        className={`${inputClasses} w-full mb-6`}
        readOnly={!isEditing}
      />
      <div className="mb-6">
        <label className={labelClasses}>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className={inputClasses}
          readOnly={!isEditing}
        />
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What happens when I update my email address (or mobile number)?</h3>
            <p className="text-muted-foreground">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
          </div>
          <div>
            <h3 className="font-semibold">When will my account be updated with the new email address (or mobile number)?</h3>
            <p className="text-muted-foreground">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
          </div>
          <div>
            <h3 className="font-semibold">What happens to my existing account when I update my email address (or mobile number)?</h3>
            <p className="text-muted-foreground">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
          </div>
          <div>
            <h3 className="font-semibold">Does my Seller account get affected when I update my email address?</h3>
            <p className="text-muted-foreground">Any changes will reflect in your Seller account also.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button className={buttonClasses} onClick={() => toast.info('Account deactivated!')}>Deactivate Account</button>
        <button
          className="text-destructive text-white bg-red-500 p-1 rounded-md hover:text-black"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
      <div className="mt-8">
        <img src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg" alt="Profile Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Showprofile;