
import Logo  from '../assets/file.svg';
import { Link } from 'react-router-dom'

export default function NavBar() {

return(
<nav className="m-0 p-0 bg-pink-200 w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto px-4 h-16flex justify-between items-center">
<div>

      <img src={Logo} alt="Logo" className='w-12 h-12 mx-3'/>
</div>
        </div>
          <div className='flex justify-end'>
          <Link to="/" className="text-black text-lg font-bold mr-6">Home</Link>
          <Link to="/FAQs" className="text-black-300 hover:text-white hover:border-b-2 hover:border-black transition duration-600 ease-in-outpx-3 py-2 transition duration-600 ease-in-out text-sm font-medium">FAQs</Link>
          <Link to="/AboutMe" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</Link>
          <Link to="/Reiki" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reiki</Link>
          <Link to="/Services" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
        </div>
    </nav>)
}


