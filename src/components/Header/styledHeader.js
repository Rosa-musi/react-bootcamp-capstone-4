import styled from 'styled-components'
import {colors} from '../../utils/colors'

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
    @media (max-width: 768px){
        margin-left: 1rem;
        margin-bottom: 0;
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
    @media (max-width: 380px){
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
`
export const SearchDiv = styled.div`
    width: fit-content;
`
export const SearchInput = styled.input`
    @media (max-width: 768px){
        width: 7rem;
    }
`