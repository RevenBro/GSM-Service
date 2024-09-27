import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import TestPoints from './pages/Testpoints/Testpoints'
import PhoneDetails from './pages/Testpoints/PhoneDetails'

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path='/testpoints' element={<TestPoints/>}/>
        <Route path='/testpoints/:brand' element={<PhoneDetails/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App