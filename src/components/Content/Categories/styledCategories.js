import styled from 'styled-components'
import {colors} from '../../../utils/colors'

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 4rem;
    background-color: ${colors.light};
    @media (max-width: 380px){
        padding-top: 1rem;
    }
   
`
export const CategoriesTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.text};
    @media (max-width: 380px){
        font-size: 1.3rem;
    }
`
export const CategoriesDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 90%;
    @media (max-width: 768px){
        width: 100%;
    }
`
export const CategorieDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    position: relative;
    margin: .5rem;
    cursor: pointer;
    @media (max-width: 380px){
        width: 6rem;
    }
`
export const CategorieImg = styled.img`
    width: 100%;
    border-radius: 1rem;
    opacity: .6;
`
export const CategorieTitle = styled.h3`
position: absolute;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: ${colors.text};
    @media (max-width: 380px){
        font-size: .9rem;
    }
`
