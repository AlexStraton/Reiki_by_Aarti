
import BookSession from "../components/BookSession"
import '../App.css'
import aarti2 from "../assets/aarti2.jpg"
import chakras from "../assets/chakras.jpg"
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faInstagram }  from "@fortawesome/free-brands-svg-icons";


export default function Home() {

return(<>

      <section className="bg-pink-100">
      <BookSession />
<p className="winky-rough-font text-5xl text-center my-4 py-8">
       Reiki by Aarti
      </p>
      <p className="winky-rough-font text-black text-center text-opacity-50 text-2xl font-bold"> Therapy and Reiki Healing in London</p>

    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 grid-rows-2 px-10 max-w-4xl mx-auto">
        <img alt="Image of Aarti" className= "pt-8 order-1 md:order-none w-full h-140 sm:h-100 md:h-full object-cover mx-auto rounded-lg" src={aarti2}></img>
            <div className="pl-4 w-full h-full flex flex-col justify-center text-xs sm:text-sm md:text-base order-2 md:order-none">
            <p className="tracking-wide text-lg roboto-condensed-font mt-8">I'm Aarti Pandya, a <span className="bg-gradient-to-r from-purple-600 to-pink-700  text-transparent bg-clip-text">certified Reiki practitioner</span> with over 10 years of experience in energy healing.</p>
        <p className="tracking-wide text-black text-lg roboto-condensed-font mt-8">Reiki has transformed my life, <span className="bg-gradient-to-r from-blue-500 to-green-700 text-transparent bg-clip-text">empowering</span> me to take control of my decisions and find inner peace. I am passionate about helping others experience the same healing and clarity.</p>
        <p className="tracking-wide text-lg text-black roboto-condensed-font mt-12">In my practice I offer personalised Reiki sessions to help you <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">heal</span>, achieve your goals, and discover a <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">deeper sense of calm</span>. Whether you seek stress relief, emotional balance, or spiritual growth, I'm here to support you.</p>
            </div>
        <div className="pl-4 w-full h-full order-4 md:order-none">
            <p className="tracking-wide text-lg text-black roboto-condensed-font mt-8">Reiki is a gentle and <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">holistic energy healing technique </span>that originated in Japan. It involves the transfer of universal force energy through the hands of a trained practitioner to promote balance and healing in the body, mind and spirit.</p>
        <p className=" tracking-wide text-lg text-black roboto-condensed-font mt-12">By channelling this energy, Reiki helps to reduce stress, relieve pain, and enhance overall well-being. </p>
        <p className=" tracking-wide text-lg text-black roboto-condensed-font mt-12">It is a <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">non-invasive</span> and <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">deeply relaxing</span> practice that supports the body's natural healing processes abd encourages emotional and spiritual growth.</p>
            </div>
        <img alt="Chakras on the human body" className=" order-3 md:order-none w-full h-full object-cover mx-auto rounded-lg" src={chakras}></img>
            </div>


<div className="p-10 relative flex flex-col justify-center items-center ">
<p className="font-bold bg-gradient-to-r from-yellow-200 to-pink-300 rounded p-2">aartipandya41@gmail.com</p>
<a href="https://www.instagram.com/reikibyaarti/"
  target="_blank"
  rel="noopener noreferrer" className="text-4xl flex gap-4 cursor-pointer font-size-4xl text-black-300 hover:text-pink-600 hover:text-4xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out font-medium ">
        <FontAwesomeIcon icon={faInstagram} />
        </a>

  </div>
  <Footer />
  </section>
</>

)
}
