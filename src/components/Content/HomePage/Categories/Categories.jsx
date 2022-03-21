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

    const {categories, setCategories, handleSelected} = useContext(renderContext)
/* 
    useEffect(() => {
        const callCategories = async () => {
            try {
                const response = await fetch("https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30")
                const data = await response.json();
                setCategories(data)
            } catch (e) {
                console.log(3)
            }
        }

        callCategories()
    }, [setCategories]) */

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