
import BookSession from "../components/BookSession"

export default function Home() {

return(<>
<div className="container mx-auto px-4">
<p className="text-5xl font-bold text-center text-white-800 my-8 py-20">
       Reiki by Aarti
      </p>
      <BookSession />
      <p> Therapy and Reiki Healing in London</p>

<div className='flex flex-row justify-center'>
<img src="https://m.media-amazon.com/images/I/31ls4+qZepL._AC_UF1000,1000_QL80_.jpg" className="w-32 h-32" alt="Master Symbol Day-Ko-Mio"></img>
<ul>
      <h3> Reiki Principles</h3>
      <h1>JUST FOR TODAY</h1>
      <li>-I let go of ANGER</li>
      <li>-I let go of WORRY</li>
      <li>-I count my many BLESSINGS</li>
      <li>-I will do my work HONESTLY</li>
      <li>-I will be kind to every single living THING</li>
</ul>
</div>
<div className="relative mx-4 my-24">
<h2 className="border-4 border-gray-300 p-6 text-xl italic rounded-md">
    <span className="absolute top-0 left-0 text-6xl text-gray-400">"</span>
    <span className="relative z-10">Nice quote</span>
    <span className="absolute bottom-0 right-0 text-6xl text-gray-400">"</span>
  </h2>
  </div>
  </div>
</>


)
}
