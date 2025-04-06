
import BookSession from "../components/BookSession"

export default function Home() {

return(<>

      <BookSession />
<p className="text-5xl font-bold text-center text-white-800 my-8 py-20">
       Reiki by Aarti
      </p>
      <p className="text-black text-center text-opacity-50 text-lg font-bold mb-12"> Therapy and Reiki Healing in London</p>

      <div className='grid grid-cols-1 md:grid-cols-2 p-5 max-w-xl mx-auto'>
  <div className="flex items-center justify-center p-2">
    <img
      src="https://m.media-amazon.com/images/I/31ls4+qZepL._AC_UF1000,1000_QL80_.jpg"
      className="w-full max-w-[200px] max-h-[200px] object-contain"
      alt="Master Symbol Day-Ko-Mio"
    />
  </div>
  <ul className="text-sm p-2">
    <h3 className="text-base font-medium"> Reiki Principles</h3>
    <h1 className="text-lg font-bold mb-2">JUST FOR TODAY</h1>
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

</>


)
}
