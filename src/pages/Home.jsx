import React from 'react'
import Follow from '../components/Follow'
import Portfolio from '../components/Portfolio'
import Hero from '../components/Hero'
import Features from '../components/Features'
import QuickLinks from '../components/QuickLinks'

function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Portfolio/>
      <QuickLinks/>
      <Follow/>
    </main>
  )
}

export default Home