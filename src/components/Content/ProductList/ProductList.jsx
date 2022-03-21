import React, {useState, useContext} from 'react'
import SideBar from './SideBar/SideBar'
import {
    ProdListContainer,
    ListDiv,
    ProdListTitle,
    ProductsDiv,
    PaginationDiv
} from './styledProductList'
import Card from '../../Common/Card/Card'
import { renderContext } from '../../../context/renderContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {colors} from '../../../utils/colors'

const ProductList = () => {

  const {newProducts, filters, categories} = useContext(renderContext);

  return (
    <ProdListContainer>
        <SideBar/>
        <ListDiv>
            <ProdListTitle>Products List</ProdListTitle>
            <ProductsDiv>
              {newProducts.length === 0 ? 
                <ProdListTitle>There are no products in those categories</ProdListTitle> :
                newProducts.map(product => {
                  return(
                    <Card key={crypto.randomUUID()} {...product}/>
                  )
                })
              }
            </ProductsDiv>
            <PaginationDiv>
              <FontAwesomeIcon 
                  className=''
                  icon="fa-solid fa-chevron-left" 
                  style={{
                      cursor: "pointer",
                      fontSize: "3rem",
                      color: colors.textLogo,
                    }} 
              />
              <FontAwesomeIcon 
                
                icon="fa-solid fa-chevron-right" 
                style={{
                    cursor: "pointer",
                    fontSize: "3rem",
                    color: colors.textLogo,
                  }} 
              />
            </PaginationDiv>
        </ListDiv>
    </ProdListContainer>
  )
}

export default ProductList