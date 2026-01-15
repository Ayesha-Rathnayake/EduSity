import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import University from './Components/University/University.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'
import { useState } from 'react'

const App = () => {

const[playState,setPlayerState]=useState(false);



  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <About setPlayerState={setPlayerState}/>
        <Title subTitle='Gallery' title='University Life'/>
        <University/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState}setPlayerState={setPlayerState}/>
    </div>
  )
}

export default App
