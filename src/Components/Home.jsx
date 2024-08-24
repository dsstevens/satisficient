import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Offerings from './Offerings.jsx'
import Statement from './Statement.jsx'

const Home = () => {
  return ( 
    <div>
      <header>{ Header }</header>
      <section>{ Statement }</section>
      <section>{ Offerings }</section>
      <footer>{ Footer }</footer>
    </div>
  )
}

export default Home
