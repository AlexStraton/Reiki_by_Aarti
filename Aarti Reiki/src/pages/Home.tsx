import React from 'react';


export default function Home() {

return(<>

<p className="text-5xl font-bold text-center text-white-800 my-8 py-24">
       Reiki by Aarti
      </p>
      <p> Therapy and Reiki Healing in London</p>
<button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 my-12">Free 15 min consultation</button>
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
<h2 className="relative border-4 border-gray-300 p-6 text-xl italic rounded-md my-24">
  <span className="absolute top-0 left-0 text-6xl text-gray-400">“</span>
  <span className="relative z-10">Nice quote</span>
  <span className="absolute bottom-0 right-0 text-6xl text-gray-400">”</span>
</h2>

</>


)
}
