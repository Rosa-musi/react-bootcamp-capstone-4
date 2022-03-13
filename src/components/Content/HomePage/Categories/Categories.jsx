import React, {useState} from 'react'
import {
    CategoriesContainer,
    CategoriesTitle,
    CategoriesDiv,
    CategoryDiv,
    CategoryImg,
    CategoryTitle,
} from './styledCategories'
import Data from '../../../../mocks/en-us/product-categories.json'

const categoriesData = []
Data.results.forEach(category => {
    categoriesData.push({
       title: category.data.name,
       image: category.data.main_image.url,
       slugs: category.data.slugs,
    })
    
})

const Categories = () => {

    const [categories, setCategories] = useState(categoriesData)

   return (
    <CategoriesContainer>
        <CategoriesTitle>Shop by category</CategoriesTitle>
        <CategoriesDiv>
            {categories.map(category => {
                return(
                    <CategoryDiv key={crypto.randomUUID()}>
                        <CategoryImg src={category.image}/>
                        <CategoryTitle>{category.title}</CategoryTitle> 
                    </CategoryDiv>
                )
            })}
        </CategoriesDiv>
    </CategoriesContainer>
  )
}

export default Categories