import React from 'react'
import Slider from '../Slider/Slider'
import Categories from '../Categories/Categories'
import {
  SliderContainer,
} from './styledHomePage'

const HomePage = () => {
  return (
    <SliderContainer>
        <Slider/>
        <Categories/>
    </SliderContainer>
    
  )
}

export default HomePage