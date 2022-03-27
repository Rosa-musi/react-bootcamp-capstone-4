import React, {useContext, useEffect} from 'react'
//
import Slider from './Slider/SwipSlider'
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
    const {data: dat, isLoadong: isLoading} = useFeaturedBanners()
    const {filters, setFilters, categories, setCategories} = useContext(renderContext)

    console.log(dat)

    //se cambia
    useEffect(() => {
      setFilters([])
      const newCategories = categories
      newCategories.forEach(cat => {
          cat.selected = false
      }) 
      setCategories(newCategories)
    }, [categories, setCategories, setFilters])

    
  

  return (
    <SliderContainer>
        <Slider/>
        <Categories/>
        <FeaturedProd/>
    </SliderContainer>
    
  )
}

export default HomePage