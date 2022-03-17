import React from 'react'
import Slider from './Slider/Slider'
import Categories from './Categories/Categories'
import FeaturedProd from './FeaturedProd/FeaturedProd'
import {
  SliderContainer,
} from './styledHomePage'
import { useFeaturedBanners } from '../../../utils/hooks/useFeaturedBanners'

const HomePage = () => {
/* 
  const [featuredBanners] = useFeaturedBanners()

  console.log(featuredBanners.data)  */
  return (
    <SliderContainer>
        <Slider/>
        <Categories/>
        <FeaturedProd/>
    </SliderContainer>
    
  )
}

export default HomePage