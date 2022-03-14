import React, {useContext} from 'react'
import {
    ContentContainer,
} from './styledContent'
import HomePage from '../Content/HomePage/HomePage'
import ProductList from './ProductList/ProductList'
import { renderContext } from '../../context/renderContext'

const Content = () => {

  const {renderProductList, setRenderProductList} = useContext(renderContext)
  return (
    <ContentContainer>
        {renderProductList ? 
          <ProductList/> : 
        <HomePage/>}
    </ContentContainer>
  )
}

export default Content