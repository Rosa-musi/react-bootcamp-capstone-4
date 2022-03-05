import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './Logo.png'
import {
  HeaderContainer,
  HeaderLogoDiv,
  HeaderLogo,
  LogoText,
  HeaderSearchDiv,
  SearchInput,
  SearchDiv,
} from './styledHeader'
import {colors} from '../../utils/colors'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLogoDiv>
            <HeaderLogo src={logo} alt="logo" />
            <LogoText>Homify</LogoText>
        </HeaderLogoDiv>
      
        <HeaderSearchDiv>
            <SearchDiv>
                <FontAwesomeIcon 
                  icon="fa-solid fa-magnifying-glass" 
                  style={{
                    color: colors.textLogo, 
                    marginRight: ".3rem", 
                    cursor: "pointer",
                  }} 
                />
                <SearchInput type="text" />
            </SearchDiv>
            <FontAwesomeIcon 
              icon="shopping-cart" 
              style={{
                color: colors.textLogo, 
                marginLeft: "1rem",
                cursor: "pointer",
              }}
            />
        </HeaderSearchDiv>
    </HeaderContainer>
  )
}

export default Header