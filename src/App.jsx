import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Follow from './components/Follow'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Features/>
        <Portfolio/>
        <Follow/>
        <Footer/>
      </main>
    </>
  )
}

export default App