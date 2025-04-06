import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe'
import Services from './pages/Services';
import Reiki from './pages/Reiki';
import FAQs from './pages/FAQs';

function App() {
  return (
    <>

  <NavBar />

  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/AboutMe" element={<AboutMe />} />
  <Route path="/Services" element={<Services />} />
  <Route path="/Reiki" element={<Reiki />} />
  <Route path="/FAQs" element={<FAQs />} />
        </Routes>

    </>
  )
}

export default App
