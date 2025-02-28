import styled from 'styled-components'
import {colors} from '../../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.header`
    font-size: 1.2rem;
    display: flex;
    width: 100%;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    margin-top: .8rem;
    margin-bottom: 1rem;

    @media (max-width: 380px){
        align-items: flex-start;
        margin-top: .2rem;
        margin-bottom: 0;
    }
`
export const HeaderLogoDiv = styled.div`
    width: fit-content;
    display: flex;
    align-items: flex-end;
    margin-left: 2.5rem;
    cursor: pointer;
    @media (max-width: 768px){
        margin-left: 1rem;
        margin-bottom: 0;
    }
    @media (max-width: 380px){
        margin-left: .5rem;
    }

`

export const HeaderLogo = styled.img`
    height: 3rem;
    margin: .5rem;
`

export const LogoText = styled.h1`
    font-family: 'Cookie', cursive;
    font-size: 2.3rem;

    color: ${colors.textLogo};
    @media (max-width: 768px){
        display: none;
    }

`

export const HeaderSearchDiv = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 3rem;
    @media (max-width: 768px){
        margin-right: 1.5rem;
    }
    @media (max-width: 380px){
        margin-right: .5rem;
    }
`
export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    height: fit-content;
    margin-right: ${props => props.shop ? "0" : "2.5rem"};
    @media (max-width: 768px){
        margin-right: 1rem;
    }
`
export const SearchInput = styled.input`
    @media (max-width: 768px){
        width: 7rem;
    }
`
export const StyledSearch = styled(FontAwesomeIcon)`
    color: ${colors.textLogo};
    cursor: pointer;
    padding-left: .8rem;
    font-size: 1.2rem;
    
    &:hover {
        color: ${colors.accent}
    }

    @media (max-width: 380px){
        padding-left: .4rem;
    }
`

export const ShopCart = styled(FontAwesomeIcon)`

    color: ${colors.textLogo};
    cursor: pointer;


    &:hover {
        color: ${colors.accent}
    }

    @media (max-width: 768px){
        margin-left: .5rem;
    }
`

export const Text = styled.p`
    font-size: 1.2rem;
    color: ${colors.textLogo};
    font-weight: bolder;
    margin-left: .5rem;
    
    
    @media (max-width: 380px){
        font-size: ${props => props.title ? "1.6rem" : "1rem"};
    }
`