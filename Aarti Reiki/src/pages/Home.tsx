
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

    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 grid-rows-3 p-20 max-w-4xl mx-auto">
        <img alt="Image of Aarti" className= "w-full h-full object-cover mx-auto rounded-lg" src={aarti2}></img>
            <div className="max-w-200 max-h-200">
            <p className="text-black text-xl roboto-condensed-font mt-12">I'm Aarti Pandya,a certified Reiki practitioner with over 10 years of experience in energy healing</p>
        <p className="text-black text-lg roboto-condensed-font mt-12">Reiki has transformed my life, empowering me to take control of my decisions and find inner peace. I am passionate about helping others experience the same healing and clarity.</p>
        <p className="text-xl text-black roboto-condensed-font mt-12">In my practice I offer personalised Reiki sessions to help you heal, achieve your goals, and discover a deeper sense of calm. Whether you seek stress relief, emotional balance, or spiritual growth, I'm her eto support you.</p>
            </div>
        <div className="max-w-200 max-h-200">
            <p className="text-lg text-black roboto-condensed-font mt-12">Reiki is a gentle and holistic energy healing technique that originated in Japan. It involves  teh transfer of universal force energy through the hands of a trained practitioner to promote balance and healing in the body, mind and spirit.</p>
        <p className="text-lg text-black roboto-condensed-font mt-12">By chanelling this energy, Reiki helps to reduce stress, relieve pain, and enhance overall well-being. It is a non-invase and deeply relaxing practice that supports teh body's natural healing processes abd encourages emotional and spiritual growth.</p>
            </div>
        <img alt="Chakras on the human body" className="w-full h-full object-cover mx-auto rounded-lg" src={chakras}></img>
            </div>


<div className="relative px-9 flex justify-center items-center ">
  <div className="">
<p>email@aarty.co.uk</p>
<a href="https://www.instagram.com/reikibyaarti/"
  target="_blank"
  rel="noopener noreferrer" className="flex gap-4 cursor-pointer font-size-4xl text-black-300 hover:text-pink-600 hover:text-2xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg font-medium" href="https://www.instagram.com/aarti_reiki/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
  </div>
  </div>
  <Footer />
  </section>
</>

)
}
