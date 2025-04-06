
import Logo  from '../assets/file.svg';
import { Link } from 'react-router-dom'

export default function NavBar() {

return(
<nav className="bg-pink-200 p-3 w-full fixed top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
      <img src={Logo} alt="Logo" className='w-12 h-12 mx-3'/>
        </div>
          <div className='flex justify-end'>
          <Link to="/" className="text-black text-lg font-bold mr-6">Home</Link>

          <Link to="/" className="text-black-300 hover:text-white hover:border-b-2 hover:border-black transition duration-600 ease-in-outpx-3 py-2 transition duration-600 ease-in-out text-sm font-medium">FAQs</Link>
          <Link to="/AboutMe" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</Link>
          <Link to="/" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reiki</Link>
          <Link to="/" className="text-black-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Price</Link>
        </div>
    </nav>)
}


