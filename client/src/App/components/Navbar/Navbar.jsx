import React from 'react';

import logo from '../../assets/images/medical-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li classNameName="mr-6 p-5"><a href="#" classNameName="text-green-600 hover:text-green-500">Home</a></li>
        <li classNameName="mr-6 p-5"><a href="#" classNameName="text-gray-600 hover:text-green-500">Services</a></li>
        <li classNameName="mr-6 p-5"><a href="#" classNameName="text-gray-600 hover:text-green-500">Doctors</a></li>
        <li classNameName="mr-6 p-5"><a href="#" classNameName="text-gray-600 hover:text-green-500">About us</a></li>
        <li classNameName="mr-6 p-5"><a href="#" classNameName="text-gray-600 hover:text-green-500">Contact us</a></li>

        <li classNameName="md:hidden xl:block">
          <button classNameName="pl-10 pr-10 bg-green-500 text-white rounded m-5">Sign in</button>
          <button classNameName="pl-10 pr-10 border border-green-500 text-green-500 rounded">Sign up</button>
        </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
};

export default Navbar;
