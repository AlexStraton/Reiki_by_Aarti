
import BookSession from "../components/BookSession"
import '../App.css'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faClover } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export default function Home() {

return(<>

      <section className="bg-pink-100">
      <BookSession />
<p className="winky-rough-font text-5xl text-center my-8 py-20">
       Reiki by Aarti
      </p>
      <p className="winky-rough-font text-black text-center text-opacity-50 text-2xl font-bold mb-12"> Therapy and Reiki Healing in London</p>

  <div className="flex flex-row justify-center items-center">
  <FontAwesomeIcon className="mr-2 text-2xl" icon={faMoon} />
    <h3 className="text-4xl"> Reiki Principles</h3>
    <FontAwesomeIcon  className="ml-2 text-2xl" icon={faMoon} />
  </div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-5 max-w-xl mx-auto'>
  <div className="flex items-center justify-center p-2">
    <img
      src="https://m.media-amazon.com/images/I/31ls4+qZepL._AC_UF1000,1000_QL80_.jpg"
      className=" w-full rounded-lg h-full object-contain "
      alt="Master Symbol Day-Ko-Mio"
    />
  </div>
  <ul className="text-2xl">
    <h1 className="text-2xl roboto-condensed-font mb-2 text-center">JUST FOR TODAY</h1>
<div className="flex flex-row gap-2 mb-4">
    <FontAwesomeIcon className="m-2" icon={faFeatherPointed} />
    <li className="roboto-condensed-font">I let go of ANGER</li>
</div>
<div className="flex flex-row gap-2 mb-4">

    <FontAwesomeIcon className="m-2" icon={faSeedling} />
    <li className="roboto-condensed-font">I let go of WORRY</li>
</div>
<div className="flex flex-row gap-2 mb-4">

    <FontAwesomeIcon className="m-2" icon={faClover} />
    <li className="roboto-condensed-font">I count my many BLESSINGS</li>
</div>
<div className="flex flex-row gap-2 mb-4">

<FontAwesomeIcon className="m-2" icon={faCloudSun} />
    <li className="roboto-condensed-font">I will do my work HONESTLY</li>
</div>
<div className="flex flex-row gap-2">
    <FontAwesomeIcon className="m-2" icon={faMountain} />
    <li className="roboto-condensed-font">I will be kind to every single living THING</li>
</div>
  </ul>
</div>
<div className="relative px-9">
<h2 className="flex flex-row justify-between border-4 border-gray-300 p-6 text-xl italic rounded-md">
    <span className=" self-start text-6xl text-gray-400">"</span>
    <span className="relative z-10">Nice quote</span>
    <span className=" self-end text-6xl text-gray-400">"</span>
  </h2>
  </div>
  <div className="h-18"></div>
  <Footer />
  </section>
</>


)
}
