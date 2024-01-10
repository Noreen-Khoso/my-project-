import React from 'react'


import Hero from "../Components/Hero"
import Footer from '../Components/Footer';
import About from "../Components/About"
import Services from "../Components/Services"
import Reviews from '../Components/Reviews';
import Navigation from '../Components/Navigation';





const Home = () => {
  return (
    <>
    <div className='/'>
      
       <Navigation/>
      <Hero/>
      <About/>
      <Services/>
      <Reviews/>
      <Footer/>
      
      
      
      


      
      
     
      
      
        
    </div>
    </>

  )
}

export default Home;