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
    })
    
})

const SideBar = () => {


  const [categories, setCategories] = useState(categoriesData)
  const [selected, setSelected] = useState([])
  const [selectedStyles, setSelectedStyles] = useState({})
  const {filters, setFilters, setProducts, products} = useContext(renderContext)

 /*  let selection = []
  categories.forEach(category => {
    selection.push({[category.title]: "false"})
  })
  setSelected(selection) */

    const handleSelected = (category) => {
      if (filters.includes(category.slugs[0])){
        const updateFilter = filters.filter(element => element != category.slugs[0])
        setFilters(updateFilter)
      } else {
        setFilters ([...filters, category.slugs[0]])
      }
  }



  
  console.log(filters)
  console.log(products)
  console.log(categories)
  console.log(selected)

  return (
    <SideBarWrapper>
      <SideBarContainer>
        <ProdListTitle>Categories</ProdListTitle>
        {categories.map(category => {
          return <Text className={selected} onClick={() =>handleSelected(category)} key={crypto.randomUUID()}>{category.title}
            <span style={{display: selected}}>{"<"}</span>
          </Text>
        })}
    </SideBarContainer>
    </SideBarWrapper>
  )
}

export default SideBar