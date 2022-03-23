import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { renderContext } from '../../context/renderContext'
import { useFetch } from '../../utils/hooks/useFetch'
import logo from './Logo.png'

import {
  HeaderContainer,
  HeaderLogoDiv,
  HeaderLogo,
  LogoText,
  HeaderSearchDiv,
  SearchInput,
  SearchDiv,
  StyledSearch,
  ShopCart
} from './styledHeader'

const Header = () => {

  const {search, setSearch, dataSearch, setDataSearch} = useContext(renderContext)

  const [data, isLoading, error] = useFetch(`&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22${search}%22)%5D%5D&lang=en-us&pageSize=20`)
    

  const handleSetData = () => {
    const productsData = []
        
    !isLoading && data.results.forEach(product => {
        productsData.push({
        name: product.data.name,
        image: product.data.mainimage.url,
        category: product.data.category.slug,
        description: product.data.short_description,
        price: product.data.price,
        id: product.id
        })
    })

      setDataSearch(productsData)
      setSearch("")
  }
console.log(data)
const handleChange = (e) => {
  setSearch(e.target.value)
  }
  return (
    <HeaderContainer>
        <Link to="/home">
          <HeaderLogoDiv>
              <HeaderLogo src={logo} alt="logo" />
              <LogoText>Homify</LogoText>
          </HeaderLogoDiv>
        </Link>
        <HeaderSearchDiv>
            <SearchDiv>
              <SearchInput 
                type="text" 
                onChange={handleChange}
                value={search}
              />
              <Link to="/search" onClick={handleSetData}><StyledSearch  icon="fa-solid fa-magnifying-glass" /></Link>
            </SearchDiv>
            <ShopCart icon="shopping-cart"/>
        </HeaderSearchDiv>
    </HeaderContainer>
  )
}

export default Header