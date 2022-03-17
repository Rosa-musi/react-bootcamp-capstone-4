import React, {useState} from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to="/products" key={crypto.randomUUID()}>
                        <CategoryDiv >
                            <CategoryImg src={category.image}/>
                            <CategoryTitle>{category.title}</CategoryTitle> 
                        </CategoryDiv>
                    </Link>
                )
            })}
        </CategoriesDiv>
    </CategoriesContainer>
  )
}

export default Categories