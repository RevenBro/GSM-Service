import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import TestPoints from './pages/Testpoints/Testpoints'
import PhoneDetails from './pages/Testpoints/PhoneDetails'
import { initReactI18next } from 'react-i18next'
import translationsEn from './locale/translationsEn'
import translationsUz from './locale/translationsUz'

import i18n from "i18next"

i18n.use(initReactI18next).init({
  resource:{
    en:{translation: translationsEn},
    uz:{translation: translationsUz}
  },
  lng:"uz",
  fallbackLng: "uz"
})
function App() {
  const changeLang = (value) => {
    i18n.changeLanguage(value)
  }
  return (
    <>
      <Header changeLang={changeLang}/>

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