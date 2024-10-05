import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Offerings from './Offerings.jsx'
import Statement from './Statement.jsx'
import '../styles/Home.scss'

const Home = () => {
  return ( 
    <div>
      <Header />
      <Statement />
      <Offerings />
      <Footer />
    </div>
  )
}

export default Home