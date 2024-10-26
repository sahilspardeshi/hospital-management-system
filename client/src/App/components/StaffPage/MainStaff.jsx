import React from "react";
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Staffsection from './StaffSection'


const App = () => {
  return (
<div className="bg-gradient-to-r from-[#c0e2d0] to-[#d1d4d6] p-10">

<div className="p-2 bg-gradient-to-r from-green-100 via-green-50 to-green-50 ">
    <div >
    <Navbar/>
    </div>
    <div className="w-1/4 h-screen fixed top-0 left-0 p-4">
        <Sidebar />
      </div>

  <Staffsection />

    </div>
    
    </div>
  );
};

export default App;



