import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import TestPoints from './pages/Testpoints/Testpoints';
import PhoneDetails from './pages/Testpoints/PhoneDetails';
import Firmwares from "./pages/Firmwares/Firmwares"
import FirmwareDetails from "./pages/Firmwares/FirmwareDetails"
import Login from './pages/user-auth/Login'
import i18n from './locale/i18n';
import './locale/i18n';
import LoginNew from './pages/user-auth/LoginNew';

function App() {
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header changeLang={changeLang}/>}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/testpoints" element={<TestPoints/>}/>
        <Route path="/testpoints/:brand" element={<PhoneDetails/>}/>
        <Route path='/firmwares' element={<Firmwares/>}/>
        <Route path="/firmwares/:brand" element={<FirmwareDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/loginnew" element={<LoginNew/>}/>
      </Routes>

      {/* <Footer /> */}
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
