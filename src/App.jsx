import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import TestPoints from './pages/Testpoints/Testpoints';
import PhoneDetails from './pages/Testpoints/PhoneDetails';
// import Firmwares from "./pages/Firmwares/Firmwares"
// import FirmwareDetails from "./pages/Firmwares/FirmwareDetails"
import i18n from './locale/i18n'; 
import './locale/i18n'; 

function App() {
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Header changeLang={changeLang} />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/testpoints" element={<TestPoints/>}/>
        <Route path="/testpoints/:brand" element={<PhoneDetails/>}/>
        {/* <Route path='/firmwares' element={<Firmwares/>}/>
        <Route path="/firmwares/:brand" element={<FirmwareDetails/>}/> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
