import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Offerings from './Offerings.jsx'
import Statement from './Statement.jsx'

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

//     <header>{ Header }</header>
//     <section>{ Statement }</section>
//     <section>{ Offerings }</section>
//     <footer>{ Footer }</footer>
// This makes React think we're trying to show the raw component function, not render it. 