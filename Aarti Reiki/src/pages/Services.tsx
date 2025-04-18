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
    <div className="md:w-1/2">
    <img className="opacity-80 w-full h-auto max-h-80 rounded-lg  object-cover" src={tree} alt="Reiki hands on example"></img>
    </div>
    <div>
            <div className="flex flex-row justify-center items-center">
              <FontAwesomeIcon className="mr-2 text-2xl" icon={faMoon} />
                <h3 className="text-2xl"> Reiki Principles</h3>
                <FontAwesomeIcon  className="ml-2 text-2xl" icon={faMoon} />
              </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 p-5 max-w-xl mx-auto'>

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
            </div>
            </div>
            <div className="bg-pink-200 p-2">
            <div className="border bg-pink-100 border-gray-300 rounded-lg shadow-2xl m-8">
<h3 className="text-5xl font-bold text-center text-white-800 my-4 py-10">
        Initial Consultation & Reiki Session: £100
      </h3>
      <p className="text-2xl p-8">Your journey begins with a comprehensive initial consultation and a Reiki session, where we discuss your needs and tailor the experience to your unique path.</p>
      </div>
      <div className="border bg-pink-100 border-gray-300 rounded-lg shadow-lg m-8">

      <h3 className="text-5xl font-bold text-center text-white-800 my-4 py-10">
        Follow up Reiki Sessions: £50
      </h3>
      <p className="p-8 text-2xl">For ongoing support, book additional Reiki sessions to continue your healing journey and work towards a balanced and empowered life.</p>
<p className="p-8 text-2xl">Book your first session today and take the first step towards wellness and personal growth.</p>
      </div>
            </div>
            <Footer />
    </>
    )
}
