import React from 'react'
import {
    SideBarContainer,
    Text,
} from './styledSideBar'
import {
    ProdListTitle
} from '../styledProductList'

const SideBar = () => {
  return (
    <SideBarContainer>
        <ProdListTitle categories>Categories</ProdListTitle>
        <Text>baño</Text>
        <Text>Cocina</Text>
    </SideBarContainer>
  )
}

export default SideBar