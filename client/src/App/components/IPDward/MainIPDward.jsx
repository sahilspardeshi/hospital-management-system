import React from "react";
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Wardsection from './Wardsection'


const App = () => {
  return (
<div className="bg-gradient-to-r from-[#c0e2d0] to-[#d1d4d6] p-10">

<div className="p-2">
<div className="p-2 bg-gradient-to-r from-green-100 via-green-50 to-green-50 ">
    <Navbar/>
    </div>
  <Sidebar/>
  <Wardsection />

    </div>
    
    </div>
  );
};

export default App;



