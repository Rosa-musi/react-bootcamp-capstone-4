import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {
    CategoriesContainer,
    CategoriesTitle,
    CategoriesDiv,
    CategoryDiv,
    CategoryImg,
    CategoryTitle,
} from './styledCategories'
import { renderContext } from '../../../../context/renderContext'

const Categories = () => {

    const {categories, handleSelected} = useContext(renderContext)




    return (
        <CategoriesContainer>
            <CategoriesTitle>Shop by category</CategoriesTitle>
            <CategoriesDiv>
                {categories.map(category => {
                    return(
                        <Link to="/products" key={crypto.randomUUID()}>
                            <CategoryDiv onClick={() => handleSelected(category)}>
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