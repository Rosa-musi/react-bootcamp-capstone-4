import React, {useContext, useEffect} from 'react'
import Slider from './Slider/Slider'
import Categories from './Categories/Categories'
import FeaturedProd from './FeaturedProd/FeaturedProd'
import {
  SliderContainer,
} from './styledHomePage'
import { renderContext } from '../../../context/renderContext'
import { useFeaturedBanners } from '../../../utils/hooks/useFeaturedBanners'


const HomePage = () => {
    const {data: dat, isLoadong: isLoading} = useFeaturedBanners()
    const {filters, setFilters, categories, setCategories} = useContext(renderContext)

   


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