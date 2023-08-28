import React from 'react'
import './Home.css'
import Banner from './BannerHome'
import About from './About'
import Servicess from './Servicess'
import Mapeamento from './Mapeamento'
import Products from './Products'
const Home = () => {
  return (
    <>
        <Banner/>
        <About/>
        <Servicess/>
        <Products/>
        <Mapeamento/>
    </>
  )
}

export default Home