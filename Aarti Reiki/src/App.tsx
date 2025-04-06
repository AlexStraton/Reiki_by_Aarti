import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe'
import BookSession from './components/BookSession'

function App() {


  return (
    <>
      <div>
<NavBar />
<Routes>
{/* <Route path="/book" element={<BookSession />} /> */}
<Route path="/" element={<Home />}/>
<Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
      </div>
    </>
  )
}

export default App
