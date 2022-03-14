import React, {useState, useContext, useCallback, useEffect} from 'react'
import {
    SideBarContainer,
    ProdListTitle,
    Text,
    SideBarWrapper
} from './styledSideBar'
import Data from '../../../../mocks/en-us/product-categories.json'
import { renderContext } from '../../../../context/renderContext'


const categoriesData = []
Data.results.forEach(category => {
    categoriesData.push({
       title: category.data.name,
       image: category.data.main_image.url,
       slugs: category.slugs,
       selected: false,
    })
    
})

const SideBar = () => {


  const [categories, setCategories] = useState(categoriesData)
  const {filters, setFilters} = useContext(renderContext)

 

  const handleSelected = (category) => {
    if (filters.includes(category.slugs[0])){
      const updateFilter = filters.filter(element => element != category.slugs[0])
      setFilters(updateFilter)
    } else {
      setFilters ([...filters, category.slugs[0]])
    }


  const newCategories = categories
    newCategories.forEach(cat => {
        if (cat.title === category.title){
          cat.selected ?  cat.selected = false : cat.selected = true
        }
    }) 
    setCategories(newCategories)  
  }



  return (
    <SideBarWrapper>
      <SideBarContainer>
        <ProdListTitle>Categories</ProdListTitle>
        {categories.map(category => {
          return <Text className={category.selected ? "true" : "false"} onClick={() =>handleSelected(category)} key={crypto.randomUUID()}>{category.title}</Text>
        })}
    </SideBarContainer>
    </SideBarWrapper>
  )
}

export default SideBar

