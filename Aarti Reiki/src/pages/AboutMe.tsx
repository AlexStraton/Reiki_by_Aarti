import BookSession from "../components/BookSession"

export default function AboutMe() {

    return(<>
    <BookSession />
    <div className="text-black text-center text-opacity-50 text-lg font-bold mt-12">ABOUT ME</div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 grid-rows-3 p-20 max-w-6xl mx-auto">
        <img alt="Image of Aarti" className= "w-full h-full object-cover" src="https://media.licdn.com/dms/image/v2/D4E22AQG6Y8tBFDmmNA/feedshare-shrink_1280/feedshare-shrink_1280/0/1716304381454?e=1746662400&v=beta&t=aM9LICXYcMds34hJ31QVNK-UHNBkSriGETpcHO4VJE8"></img>
            <div className="max-w-200 max-h-200">
            <p className="text-black text-lg font-serif font-bold mt-12">I'm Aarti Pandya,a certified Reiki practitioner with over 10 years of experience in energy healing</p>
        <p className="text-black text-lg font-bold mt-12">Reiki has transformed my life, empowering me to take control of my decisions and find inner peace. I am passionate about helping others experience the same healing and clarity.</p>
            </div>
        <div className="max-w-200 max-h-200">
            <p className="text-black text-lg font-bold mt-12">Reiki is a gentle and holistic energy healing technique that originated in Japan. It involves  teh transfer of universal force energy through the hands of a trained practitioner to promote balance and healing in the body, mind and spirit.</p>
        <p className="text-black text-lg font-bold mt-12">By chanelling this energy, Reiki helps to reduce stress, relieve pain, and enhance overall well-being. It is a non-invase and deeply relaxing practice that supports teh body's natural healing processes abd encourages emotional and spiritual growth.</p>
            </div>
        <img alt="Chakras on the human body" className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2019/05/06/00/21/chakras-4181990_960_720.png 1x, https://cdn.pixabay.com/photo/2019/05/06/00/21/chakras-4181990_1280.png"></img>

        <img alt="Reiki symbol on a white pebble" className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2013/12/27/11/19/characters-234294_1280.jpg"></img>
        <div className="max-w-200 max-h-200">
        <p className="text-black text-lg font-bold mt-12">In my practice I offer personalised Reiki sessions to help you heal, achieve your goals, and discover a deeper sense of calm. Whether you seek stress relief, emotional balance, or spiritual growth, I'm her eto support you.</p>

            </div>
            </div>
    </>
    )
}
