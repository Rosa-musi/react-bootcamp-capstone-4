import React, { useContext } from 'react'
import {
    SideBarContainer,
    ProdListTitle,
    Text,
    SideBarWrapper
} from './styledSideBar'
import { renderContext } from '../../../../context/renderContext'




const SideBar = () => {

  const {categories, setCategories, handleSelected, filters, setFilters} = useContext(renderContext)

  const handleClear = () => {
    setFilters([])
    const newCategories = categories
    newCategories.forEach(cat => {
      cat.selected = false
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
        {
          filters.length != 0 && <Text onClick={handleClear}>Clear Filters</Text>
        }
    </SideBarContainer>
    </SideBarWrapper>
  )
}

export default SideBar

