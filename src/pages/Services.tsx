import BookSession from "../components/BookSession"
import Footer from "../components/Footer"
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faClover } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

import tree from "../assets/tree.jpg"

export default function Services() {

    return(<>
    <BookSession />
    <div className="flex flex-col md:flex-row p-8 bg-pink-100">
    <img className="opacity-80 md:w-1/2 w-full h-auto max-h-100 rounded-lg  object-cover" src={tree} alt="Pink tree surrounded by grenery" />
          <div className='text-2xl md:text-xl sm:text-lg flex flex-col justify-center items-center p-5 max-w-4xl'>
            <div className=" text-4xl md:text-xl sm:text-lg flex flex-row ">
              <FontAwesomeIcon className="mr-2" icon={faMoon} />
                <h3 className="winky-rough-font"> Reiki Principles</h3>
                <FontAwesomeIcon  className="ml-2 " icon={faMoon} />
              </div>
                <h1 className="winky-rough-font my-6">JUST FOR TODAY</h1>

              <ul className="text-left">
  <li className="flex flex-row items-center gap-2 mb-4">
    <FontAwesomeIcon className="m-2 flex-none" icon={faFeatherPointed} />
    <span className="roboto-condensed-font flex-grow">I let go of ANGER</span>
  </li>
  <li className="flex flex-row items-center gap-2 mb-4">
    <FontAwesomeIcon className="m-2 flex-none" icon={faSeedling} />
    <span className="roboto-condensed-font flex-grow">I let go of WORRY</span>
  </li>
  <li className="flex flex-row items-center gap-2 mb-4">
    <FontAwesomeIcon className="m-2 flex-none" icon={faClover} />
    <span className="roboto-condensed-font flex-grow">I count my many BLESSINGS</span>
  </li>
  <li className="flex flex-row items-center gap-2 mb-4">
    <FontAwesomeIcon className="m-2 flex-none" icon={faCloudSun} />
    <span className="roboto-condensed-font flex-grow">I will do my work HONESTLY</span>
  </li>
  <li className="flex flex-row items-center gap-2">
    <FontAwesomeIcon className="m-2 flex-none" icon={faMountain} />
    <span className="roboto-condensed-font flex-grow">I will be kind to every single living THING</span>
  </li>
</ul>
   </div>

            </div>





            <div className="bg-pink-200 p-2">
            <div className="border bg-pink-100 border-gray-300 rounded-lg shadow-2xl m-8">
<h3 className="text-4xl winky-rough-font lg:text-2xl md:text-xl sm:text-lg font-bold text-center text-white-800 mx-2 py-2">
        Initial Consultation & Reiki Session: £100
      </h3>
      <p className="winky-rough-font p-4">Your journey begins with a comprehensive initial consultation and a Reiki session, where we discuss your needs and tailor the experience to your unique path.</p>
      </div>
      <div className="border bg-pink-100 border-gray-300 rounded-lg shadow-lg m-8">

      <h3 className="text-4xl winky-rough-font lg:text-2xl md:text-xl sm:text-lg font-bold text-center text-white-800 mx-2 py-2">
        Follow up Reiki Sessions: £50
      </h3>
      <p className="p-4 winky-rough-font">For ongoing support, book additional Reiki sessions to continue your healing journey and work towards a balanced and empowered life.</p>
<p className="p-4 winky-rough-font">Book your first session today and take the first step towards wellness and personal growth.</p>
      </div>
            </div>
            <Footer />
    </>
    )
}
