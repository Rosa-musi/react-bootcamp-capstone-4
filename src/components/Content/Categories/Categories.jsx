import React, {useState} from 'react'
import {
    CategoriesContainer,
    CategoriesTitle,
    CategoriesDiv,
    CategorieDiv,
    CategorieImg,
    CategorieTitle,
} from './styledCategories'
import Data from '../../../mocks/en-us/product-categories.json'

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
                    <CategorieDiv key={crypto.randomUUID()}>
                        <CategorieImg src={categorie.image}/>
                        <CategorieTitle>{categorie.title}</CategorieTitle> 
                    </CategorieDiv>
                )
            })}
        </CategoriesDiv>
    </CategoriesContainer>
  )
}

export default Categories