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

const Categories = () => {

    const categoriesData = []
    Data.results.forEach(categorie => {
        categoriesData.push({
           title: categorie.data.name,
           image: categorie.data.main_image.url,
           slugs: categorie.data.slugs,
        })
        
    })

    const [categories, setCategories] = useState(categoriesData)

    console.log(categories)
   return (
    <CategoriesContainer>
        <CategoriesTitle>Shop by categorie</CategoriesTitle>
        <CategoriesDiv>
            {categories.map(categorie => {
                return(
                    <CategoryDiv key={crypto.randomUUID()}>
                        <CategoryImg src={categorie.image}/>
                        <CategoryTitle>{categorie.title}</CategoryTitle> 
                    </CategoryDiv>
                )
            })}
        </CategoriesDiv>
    </CategoriesContainer>
  )
}

export default Categories