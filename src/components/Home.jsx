import React from 'react'
import HeroSection from "./subComponents/HeroSection"
import Recipes from "./subComponents/Recipes"

const Home = ({recipes}) => {
  return (
    <div>
      <HeroSection/>
      <Recipes recipes={recipes} />
    </div>
  )
}

export default Home