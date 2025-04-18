import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";

import Services from './pages/Services';


function App() {
  return (
    <>

  <NavBar />

  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Services" element={<Services />} />


        </Routes>

    </>
  )
}

export default App
