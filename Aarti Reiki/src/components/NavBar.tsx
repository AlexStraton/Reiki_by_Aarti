
import Logo  from '../assets/file.svg';
import { Link } from 'react-router-dom'
import Burger from '../assets/burger-menu-svgrepo-com.svg'
import { useState } from 'react';
import '../App.css'

export default function NavBar() {
      const [toggleDropdown, setToggleDropdown] = useState(false);

return(
<nav className="m-0 p-0 bg-pink-200 w-full top-0 left-0 z-50 shadow-md flex flex-row items-center justify-between p-8">
      <div className=''>

      <img src={Logo} alt="Logo" className='w-20 h-20 mx-3 rounded-lg'/>
      </div>

{/* Desktop Navigation */}
          <div className='hidden justify-between gap-6 sm:flex ml-auto mr-6 winky-rough-font'>
          <Link to="/" className="text-black-300 hover:text-pink-600 hover:text-2xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg font-medium">Home</Link>
          <Link to="/Services" className="text-black-300 hover:text-pink-600 hover:text-2xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg font-medium">Services</Link>
        </div>
        <div>

            {/* Mobile Navigation */}
<div className="sm:hidden relative">
<img
  src={Burger}
  alt="Menu"
  width={37}
  height={37}
  onClick={() => {
    setToggleDropdown((prev: any) => !prev);
  }}
/>
{toggleDropdown && (<div className="dropdown">
      <Link to="/" className="text-black text-lg font-bold mr-6"  onClick={() => setToggleDropdown(false)}>Home</Link>

          <Link to="/Services" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"  onClick={() => setToggleDropdown(false)}>Services</Link>
</div>)}
</div>
        </div>
    </nav>)
}





