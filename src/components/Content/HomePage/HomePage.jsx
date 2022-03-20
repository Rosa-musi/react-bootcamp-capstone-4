import React, {useContext, useEffect} from 'react'
import Slider from './Slider/Slider'
import Categories from './Categories/Categories'
import FeaturedProd from './FeaturedProd/FeaturedProd'
import {
  SliderContainer,
} from './styledHomePage'
import { renderContext } from '../../../context/renderContext'
import { useFeaturedBanners } from '../../../utils/hooks/useFeaturedBanners'
import { useLatestAPI } from '../../../utils/hooks/useLatestAPI'

const HomePage = () => {
    const {apiMetadata} = useLatestAPI() 
    const {featuredBanners} = useFeaturedBanners()
    const {filters, setFilters, clearCatFilters, categories, setCategories} = useContext(renderContext)
   

    //se cambia
  useEffect(()=> {
    clearCatFilters()
  }, [setCategories, setFilters, categories, clearCatFilters]) 

  return (
    <SliderContainer>
        <Slider/>
        <Categories/>
        <FeaturedProd/>
    </SliderContainer>
    
  )
}

export default HomePage