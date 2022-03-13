import React, {useState, useContext} from 'react'
import SideBar from './SideBar/SideBar'
import {
    ProdListContainer,
    ListDiv,
    ProdListTitle,
    ProductsDiv,
} from './styledProductList'
import Card from '../../Common/Card/Card'
import { renderContext } from '../../../context/renderContext'

const ProductList = () => {

  const {filters, setFilters, products, newProducts} = useContext(renderContext);

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
        </ListDiv>
    </ProdListContainer>
  )
}

export default ProductList