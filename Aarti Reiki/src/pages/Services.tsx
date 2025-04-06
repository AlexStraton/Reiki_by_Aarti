import BookSession from "../components/BookSession"

export default function Services() {

    return(<>
    <BookSession />
    <div className="grid md:grid-cols-2 grid-cols-1 p-8">
    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/6998270/pexels-photo-6998270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Reiki hands on example"></img>
            <div className="text-1xl md:text-lg w-full h-full text-center text-white-200 my-4 md:my-8 p-4 md:py-20">
        <h1 className="font-semibold mb-12">The best version of you</h1>
            <p >Let's work together to unlock your potential and create your desired life. Book a session today and start your jouney to wellness and empowrnment.</p>
            </div>
            </div>
            <div className="bg-gray-200 p-2">
<h3 className="text-5xl font-bold text-center text-white-800 my-4 py-10">
        Initial Consultation & Reiki Session: £100
      </h3>
      <p>Your journey begins with a comprehensive initial consultation and a Reiki session, where we discuss your needs and tailor the experience to your unique path.</p>
      <h3 className="text-5xl font-bold text-center text-white-800 my-4 py-10">
        Follow up Reiki Sessions: £50
      </h3>
      <p>For ongoing support, book additional Reiki sessions to continue your healing journey and work towards a balanced and empowered life.</p>
<p>Book your first session todayt and take the first step towards wellness and personal growth.</p>
            </div>
    </>
    )
}
