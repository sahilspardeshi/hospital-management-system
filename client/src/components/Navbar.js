import React from 'react';
import logo from './IMAGE/medical-logo.png';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li className="mr-6 p-5"><a href="#" className="text-green-600 hover:text-green-500">Home</a></li>
        <li className="mr-6 p-5"><a href="#" className="text-gray-600 hover:text-green-500">Services</a></li>
        <li className="mr-6 p-5"><a href="#" className="text-gray-600 hover:text-green-500">Doctors</a></li>
        <li className="mr-6 p-5"><a href="#" className="text-gray-600 hover:text-green-500">About us</a></li>
        <li className="mr-6 p-5"><a href="#" className="text-gray-600 hover:text-green-500">Contact us</a></li>

        <li className="md:hidden xl:block">
          <button className="pl-10 pr-10 bg-green-500 text-white rounded m-5">Sign in</button>
          <button className="pl-10 pr-10 border border-green-500 text-green-500 rounded">Sign up</button>
        </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
};

export default Navbar;