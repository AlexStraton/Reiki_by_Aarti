import React from 'react';

import Logo  from '../assets/file.svg';
export default function NavBar() {

return(
<nav className="bg-pink-200 p-3 w-full fixed top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">

  <img src={Logo} alt="Logo" className='w-12 h-12 mx-3'/>

<a href="#" className="text-black text-lg font-bold mr-6">Home</a>
          <div className='flex justify-end'>

          <a href="#" className="text-black-300 hover:text-white hover:border-b-2 hover:border-black transition duration-600 ease-in-outpx-3 py-2 transition duration-600 ease-in-out text-sm font-medium">FAQs</a>
          <a href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</a>
          <a href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reiki</a>
          <a href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Price</a>

          </div>
        </div>
        <div>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Book Session</a>
        </div>
      </div>
    </nav>)
}


